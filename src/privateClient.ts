import { scheduleJob } from "node-schedule";
import * as TelegramBot from "node-telegram-bot-api";
import { InvestingToken } from './models';
import { SolriseRpcClient, AccountInfo, Account } from "./utils/solriseRpcClient";
import { getToken } from "./utils/tokens";
import { Logger } from "./logger";
import { PublicKey } from "@solana/web3.js";
import { SolriseApiClient } from "./utils/solriseApiClient";

export class PrivateClient {

    private myFundId: PublicKey
    private targetFundId: PublicKey

    private solriseApiClient = new SolriseApiClient();
    private solriseRpcClient = new SolriseRpcClient();

    private myAssetAccounts: PublicKey[] = [];
    private targetAssetAccounts: PublicKey[] = []; 

    private bot: TelegramBot;
    private chatId: string;
    
    constructor(myFundId: PublicKey, targetFundId: PublicKey, bot: TelegramBot, chatId: string) {
        this.myFundId = myFundId;
        this.targetFundId = targetFundId;
        this.bot = bot;
        this.chatId = chatId;
    }

    public activate() {
        this._syncStatus();

        scheduleJob(
        '*/20 * * * * *',
        () => this._syncStatus()
        );
    }

    private async _syncStatus() {
        const myInvestingToken = await this._getInvestingToken(this.myAssetAccounts);

        const targetInvestingToken = await this._getInvestingToken(this.targetAssetAccounts);
      
        console.log(`******************`);
      
        if(myInvestingToken.amount < 5 || targetInvestingToken.amount < 5) {
            Logger.logNeedToFetchAccounts();
            await this._fetchAccounts();
        }
        else {
            Logger.logTime();
            Logger.logAccountStatus("Mine", myInvestingToken);
            Logger.logAccountStatus("Target", targetInvestingToken);
            
            if(myInvestingToken.mint != targetInvestingToken.mint) {
                Logger.logChangeInvestingToken(targetInvestingToken.fullName, targetInvestingToken.name);
                this._sendNotification(targetInvestingToken.fullName, targetInvestingToken.name);
            }
            else {
                Logger.logNothingChanged();
            }
        }
      
        console.log(`******************`);
    }

    private async _fetchAccounts() {
        const myFundRes = await this.solriseApiClient.getFund(this.myFundId); 
        const targetFundRes = await this.solriseApiClient.getFund(this.targetFundId);
        
        if(myFundRes.data.data === null ||targetFundRes.data.data === null) {
            return;
        }
        
        const myFundAccount = myFundRes.data.data;
        const targetFundAccount = targetFundRes.data.data;
        
        this.myAssetAccounts = myFundAccount.assets.map(asset => new PublicKey(asset.pubkey));
        this.targetAssetAccounts = targetFundAccount.assets.map(asset => new PublicKey(asset.pubkey));
    }

    private _sendNotification(tokenFullName: string, tokenName: string) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Taipei' });
        const message = `${timeString} 將資金轉移到 ${tokenFullName}(${tokenName})`;
        console.log(`=====================`);
        console.log(message);
        console.log(message);
        console.log(message);
        console.log(`=====================`);
      
        this.bot.sendMessage(this.chatId, message);
    }
      
    private async _getInvestingToken(assetAccounts: PublicKey[]) {
    
        const getAccountsRes = await this.solriseRpcClient.getMultipleAccounts(
            assetAccounts.map(account => account.toString())
        );
        
        let investingToken: InvestingToken = {
            fullName: '',
            name: '',
            mint: '',
            amount: 0
        };
        
        if(getAccountsRes.data.result === null) {
            return investingToken;
        }
        
        const accountsInfo = getAccountsRes.data.result.value.map(
            value => value as AccountInfo<Account>
        );
        
        accountsInfo.forEach(
            account => {
        
            if(account) {
                const info = account.data.parsed.info;
        
                if(info.tokenAmount.uiAmount > investingToken.amount) {
                const token = getToken(info.mint);
        
                if(token) {
                    investingToken.fullName = token.fullName;
                    investingToken.name = token.name.toUpperCase();
                    investingToken.mint = info.mint;
                    investingToken.amount = info.tokenAmount.uiAmount;
                }
                else {
                    Logger.logTokenWasNotFound();
                }
                }
            }
        
            }
        )
        
        return investingToken; 
    }
}