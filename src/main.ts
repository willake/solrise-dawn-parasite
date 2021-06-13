import { scheduleJob } from "node-schedule";
import * as TelegramBot from "node-telegram-bot-api";
import { SolriseClient, AccountInfo, Account } from "./utils/solriseClient";
import { getTokenName } from "./utils/tokens";
import { FundAccountDataLayout } from "./utils/layout";
import { PublicKey } from "@solana/web3.js";

const solriseClient = new SolriseClient();

const myAccounts = [
  "HwdLLwnRCfQAX7ZFxsQp8AiNo5DmAFUST55tzs2ns6of",
  "HcetcEZ7ukqoNf4e5D7w6sMwQ1YXNGFxcuPDwQs81Yiv",
  "8z7qMyTbrBkEHFF9cikmkajuaSoJf9AeqTGV3ovmUsyS",
  "5mL9NSL5KSwhbB1bCsKsDqo7mW95D3NBArBCyAuKSGBy",
  "9eGYg93zr9RhivMfiAkFVMpqYiGXMVrmH6wDS6YknitB",
  "9VkzUQz5ZUNsZdjfFGqrwy4GtzjERXtJkzqHS8iwtN9w",
  "4FCwyCFfjQn75WkKrWPUsQ5BsmNqTgFoTL6wuFavLHiZ"
];

const targetAccounts = [
  "E76nNiva1bVwJXXxRpua2JiKoMU5M9BeE5VPGeDVKCwh",
  "AQ5o8gC66315ggrSh2RS4iqk2j35PMyrTC5waWXHXsUv",
  "8SokAoinXG4TWYaYrgjUZkZ3yWHUgSKguC437xooxkPc",
  "Hj6BY4kBW12eNA1w8Xbv6bPN3kuyeTnrNcFF9bSYag49",
  "2yzRcBHvWSsgwCvgArsiuv1Qy9Cnrw5P58wcxryQYVcX",
  "ApEYAaXt7LkHLBvHS4t2LYpLb51cgRxi7UH6poKkhLwG",
  "F1eqWCgxQDgv3EErvvXUFykv1bjroTJfKZGrstpHasRD",
  "2hgdNCd4Z4Wx2jwgFRsAmZRTU3BZKrRAGNAMvFkNf22K"
];

const telegramToken = '1734418682:AAH2i6kAtvHjdVerH5jq-scarylurjlWb14';
const chatId = 1128561501;

solriseClient
  .getAccountInfo("D38UHywhBhHopYWKXTtVZG3mx5Yq8HQMkcDS6Sh2u99R")
  .then(res => {
    const info = res.data.result.value;
    const data = Buffer.from(info.data[0]);
    const fundInfo = FundAccountDataLayout.decode(data);

    for (let accountId in fundInfo.assetMintAccounts) {
      console.log(new PublicKey(fundInfo.assetMintAccounts[accountId]).toString());
    }
  })
  .catch(e => console.log(e));

async function main() {
  const myAccountsRes = await solriseClient.getMultipleAccounts(
    myAccounts
  );

  const targetAccountsRes = await solriseClient.getMultipleAccounts(
    targetAccounts
  );

  // watch target behavior
  const myAccountsInfo = myAccountsRes.data.result.value.map(
    value => value as AccountInfo<Account>
  );

  const targetAccountsInfo = targetAccountsRes.data.result.value.map(
    value => value as AccountInfo<Account>
  );

  const bot = new TelegramBot(telegramToken, { polling: false });

  const myAllInMint = getAllInMint(myAccountsInfo);

  const targetAllInMint = getAllInMint(targetAccountsInfo);

  if(targetAllInMint.amount < 50) {
    bot.sendMessage(chatId, `target may add new accounts`);
  }
  
  const now = new Date();
  console.log(`******************`);
  console.log(`Now - ${now.toLocaleTimeString()}`);
  console.log(`Mine - ${JSON.stringify(myAllInMint)}`);
  console.log(`Mine - ${JSON.stringify(myAllInMint)}`);
  console.log(`Target - ${JSON.stringify(targetAllInMint)}`);
  if(myAllInMint.mint != targetAllInMint.mint) 
  {
    console.log(`=====================`);
    console.log(`Alert! Should modify your fund to ${getTokenName(targetAllInMint.mint)}`);
    console.log(`Alert! Should modify your fund to ${getTokenName(targetAllInMint.mint)}`);
    console.log(`Alert! Should modify your fund to ${getTokenName(targetAllInMint.mint)}`);
    console.log(`=====================`);

    bot.sendMessage(chatId, `Alert! Should modify your fund to ${getTokenName(targetAllInMint.mint)}`)
  }
  else
  {
    console.log(`=====================`);
    console.log(`Noting to change`);
    console.log(`=====================`);
  }
  console.log(`******************`);

  // follow

}

function getAllInMint(accountsInfo: AccountInfo<Account>[]) {

  let allInMint = {
    mint: '',
    amount: 0
  };

  accountsInfo.forEach(
    a => {

      if(a) {
        const info = a.data.parsed.info;

        // console.log(`mint - ${getTokenName(info.mint)} amount - ${info.tokenAmount.uiAmount}`)          
        
        if(info.tokenAmount.uiAmount > allInMint.amount) {
          allInMint.mint = info.mint;
          allInMint.amount = info.tokenAmount.uiAmount;
        }
      }
    }
  )

  return allInMint; 
}

// main()

// scheduleJob(
//   '*/30 * * * * *',
//   () => main()
// );

