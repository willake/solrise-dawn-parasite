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
  
    if(myInvestingToken.mint != targetInvestingToken.mint) 
    {
      sendNotification(targetInvestingToken.fullName, targetInvestingToken.name);
    }
    else
    {
      console.log(`=====================`);
      console.log(`Noting to change`);
      console.log(`=====================`);
    }
  }

  console.log(`******************`);
}

async function fetchAccounts() {
  const myFund = (await solriseApiClient.getFund(MY_FUND_ID)).data.data;
  const targetFund = (await solriseApiClient.getFund(TARGET_FUND_ID)).data.data;

  myAssetAccounts = myFund.assets.map(asset => new PublicKey(asset.pubkey));
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

function logAccountStatus(myInvestingToken: InvestingToken, targetInvestingToken: InvestingToken) {
  const now = new Date();
  console.log(`Now - ${now.toLocaleTimeString()}`);
  console.log(`Mine - ${JSON.stringify(myInvestingToken)}`);
  console.log(`Target - ${JSON.stringify(targetInvestingToken)}`);
}

function sendNotification(tokenFullName: string, tokenName: string) {
  console.log(`=====================`);
  console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
  console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
  console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
  console.log(`=====================`);

  bot.sendMessage(CHAT_ID, `請將資金轉移到 ${tokenFullName}(${tokenName})`)
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

