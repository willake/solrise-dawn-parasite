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

### 執行方式
```
## collect chat id
yarn collect-chat-id

## run dev
yarn dev

## build
yarn build
```

### 如何取得 Chat ID
先在 .env 中設定好 TELEGRAM_BOT_TOKEN，對自己的機器人講一句話，然後執行
```
yarn collect-chat-id
```
就會得到 chat id，這樣需要更換投資的幣的時候就會收到 telegram 通知

#### 定時
在 main.ts 中可以將任務定時，修改 x 就可以調整更新的區間（每幾秒一次）

```
scheduleJob(
  '*/x * * * * *',
  () => main()
);

```