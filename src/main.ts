import * as TelegramBot from "node-telegram-bot-api";
import { PublicKey } from "@solana/web3.js";
import { config } from "dotenv";
import { PrivateClient } from "./privateClient";

config();

const MY_FUND_ID = new PublicKey(process.env.MY_FUND_ID);
const TARGET_FUND_ID = new PublicKey(process.env.TARGET_FUND_ID);

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

const client = new PrivateClient(
  MY_FUND_ID,
  TARGET_FUND_ID,
  bot,
  CHAT_ID
);

client.activate();