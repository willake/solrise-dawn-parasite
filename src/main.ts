import { scheduleJob } from "node-schedule";
import * as TelegramBot from "node-telegram-bot-api";
import { SolriseRpcClient, AccountInfo, Account } from "./utils/solriseRpcClient";
import { getToken } from "./utils/tokens";
import { PublicKey } from "@solana/web3.js";
import { SolriseApiClient } from "./utils/solriseApiClient";
import { config } from "dotenv";

config();

const solriseApiClient = new SolriseApiClient();
const solriseRpcClient = new SolriseRpcClient();

const MY_FUND_ID = new PublicKey(process.env.MY_FUND_ID);
const TARGET_FUND_ID = new PublicKey(process.env.TARGET_FUND_ID);

var myAssetAccounts: PublicKey[] = [];
var targetAssetAccounts: PublicKey[] = [];

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

async function main() {

  const myInvestingToken = await getInvestingToken(myAssetAccounts);

  const targetInvestingToken = await getInvestingToken(targetAssetAccounts);

  console.log(`******************`);

  if(myInvestingToken.amount < 5 || targetInvestingToken.amount < 5) {
    console.log(`investing token was not found. now fetch newest accounts...`);
    await fetchAccounts();
  }
  else {
    logAccountStatus(myInvestingToken, targetInvestingToken);
  
    if(myInvestingToken.mint != targetInvestingToken.mint) {
      logChangeInvestingToken(targetInvestingToken.fullName, targetInvestingToken.name);
    }
    else {
      logNothingChanged();
    }
  }

  console.log(`******************`);
}

async function fetchAccounts() {
  const myFundRes = await solriseApiClient.getFund(MY_FUND_ID); 
  const targetFundRes = await solriseApiClient.getFund(TARGET_FUND_ID);

  if(myFundRes.data.data === null ||targetFundRes.data.data === null) {
    return;
  }

  const myFundAccount = myFundRes.data.data;
  const targetFundAccount = targetFundRes.data.data;

  myAssetAccounts = myFundAccount.assets.map(asset => new PublicKey(asset.pubkey));
  targetAssetAccounts = targetFundAccount.assets.map(asset => new PublicKey(asset.pubkey));
}

async function getInvestingToken(assetAccounts: PublicKey[]) {

  const getAccountsRes = await solriseRpcClient.getMultipleAccounts(
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
            logTokenNotFound();
          }
        }
      }

    }
  )

  return investingToken; 
}

function logAccountStatus(myInvestingToken: InvestingToken, targetInvestingToken: InvestingToken) {
  const now = new Date();
  console.log(`Now - ${now.toLocaleTimeString()}`);
  console.log(`Mine - ${JSON.stringify(myInvestingToken)}`);
  console.log(`Target - ${JSON.stringify(targetInvestingToken)}`);
}

function logChangeInvestingToken(tokenFullName: string, tokenName: string) {
  console.log(`=====================`);
  console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
  console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
  console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
  console.log(`=====================`);

  bot.sendMessage(CHAT_ID, `請將資金轉移到 ${tokenFullName}(${tokenName})`);
}

function logNothingChanged() {
  console.log(`=====================`);
  console.log(`Noting changed`);
  console.log(`=====================`);
}

function logTokenNotFound() {
  console.log(`Token was not found, please update your token list`);
}

interface InvestingToken {
  fullName: string,
  name: string
  mint: string,
  amount: number
}

main()

scheduleJob(
  '*/20 * * * * *',
  () => main()
);

