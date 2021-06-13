# Solrise Dawn Parasite
這是程式是為了在 Solrise 的投資比賽中取得排名而撰寫的，用途是寄生目標的投資策略來跟單，另外有 telegram 通知的功能。

## 安裝方式

### 環境架設
```
## install yarn
npm install -g yarn

## install typescript
npm install -g typescript

## install ts-node
npm install -g ts-node

## install packages
yarn
```

### 設定 .env
新增一個 .env 檔案到根目錄

```
## .env
MY_FUND_ID=${MY_FUND_ID} // 自己的 id
TARGET_FUND_ID=${TARGET_FUND_ID} // 目標的 id
TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN} // 自己創的 tg 機器人 token
CHAT_ID=${CHAT_ID} // 和機器人的 chat id
```

### 如何取得機器人 Token
可以照著[Teleram 教學文件](https://core.telegram.org/bots)來操作已創立機器人

簡單的步驟就是把 [BotFather](https://t.me/botfather) 加到好友，照著他寫的指示做，就會得到 token 了

### 如何取得 Chat ID
先在 .env 中設定好 TELEGRAM_BOT_TOKEN，在 telegram 將機器人加入自己好友，再對自己的機器人講一句話，然後執行，讓程式去拿最新的紀錄
```
yarn collect-chat-id
```
最後就會得到 chat id，這樣設定好後需要更換投資方向的時候就能夠收到 telegram 機器人的通知

### 執行方式
```
## run dev
yarn dev
```

### 定時
在 main.ts 中可以將任務定時，修改 x 就可以調整更新的區間（每幾秒一次）

```
scheduleJob(
  '*/x * * * * *',
  () => main()
);

```