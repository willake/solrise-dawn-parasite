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

const TARGET_FUND_ID = new PublicKey(process.env.TARGET_FUND_ID);

var targetAssetAccounts: PublicKey[] = [];
var targetInvestingToken: InvestingToken = {
  fullName: '',
  name: '',
  mint: '',
  amount: 0
};

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

async function main() {

  const investingToken = await getInvestingToken(targetAssetAccounts);

  console.log(`******************`);

  if(investingToken.amount < 5) {
    console.log(`investing token was not found. now fetch newest accounts...`);
    await fetchAccounts();
  }
  else {
    logAccountStatus(investingToken);
  
    if(targetInvestingToken.mint != investingToken.mint) 
    {
      sendNotification(investingToken.fullName, investingToken.name);
    }
    else
    {
      console.log(`=====================`);
      console.log(`Noting to change`);
      console.log(`=====================`);
    }
  }

  console.log(`******************`);

  targetInvestingToken = investingToken;
}

async function fetchAccounts() {
  const targetFund = (await solriseApiClient.getFund(TARGET_FUND_ID)).data.data;

  targetAssetAccounts = targetFund.assets.map(asset => new PublicKey(asset.pubkey));
}

async function getInvestingToken(assetAccounts: PublicKey[]) {

  const getAccountsRes = await solriseRpcClient.getMultipleAccounts(
    assetAccounts.map(account => account.toString())
  );

  const accountsInfo = getAccountsRes.data.result.value.map(
    value => value as AccountInfo<Account>
  );

  let investingToken: InvestingToken = {
    fullName: '',
    name: '',
    mint: '',
    amount: 0
  };

  accountsInfo.forEach(
    a => {

      if(a) {
        const info = a.data.parsed.info;

        if(info.tokenAmount.uiAmount > investingToken.amount) {
          const token = getToken(info.mint);

          if(token)
          {
            investingToken.fullName = token.fullName;
            investingToken.name = token.name.toUpperCase();
            investingToken.mint = info.mint;
            investingToken.amount = info.tokenAmount.uiAmount;
          }
        }
      }

    }
  )

  return investingToken; 
}

function logAccountStatus(investingToken: InvestingToken) {
  const now = new Date();
  console.log(`Now - ${now.toLocaleTimeString()}`);
  console.log(`Target - ${JSON.stringify(investingToken)}`);
}

function sendNotification(tokenFullName: string, tokenName: string) {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Taipei' });
  const message = `${timeString} 將資金轉移到 ${tokenFullName}(${tokenName})`;
  console.log(`=====================`);
  console.log(message);
  console.log(message);
  console.log(message);
  console.log(`=====================`);

  bot.sendMessage(CHAT_ID, message);
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

