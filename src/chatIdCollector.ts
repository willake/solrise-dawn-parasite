import { config } from 'dotenv';
import * as TelegramBot from "node-telegram-bot-api";

config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

async function main() {
    const updates = await bot.getUpdates();

    updates.forEach(update => console.log(`chat id - ${update.message.chat.id}`));
}

main();