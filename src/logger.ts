import { InvestingToken } from './models';

export class Logger {

    static logTime() {
        const now = new Date();
        console.log(`Now - ${now.toLocaleTimeString()}`);
    }
    
    static logAccountStatus(title: string, investingToken: InvestingToken) {
        console.log(`${title} - ${JSON.stringify(investingToken)}`);
    }
      
    static logChangeInvestingToken(tokenFullName: string, tokenName: string) {
        console.log(`=====================`);
        console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
        console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
        console.log(`請將資金轉移到 ${tokenFullName}(${tokenName})`);
        console.log(`=====================`);
    }
      
    static logNothingChanged() {
        console.log(`=====================`);
        console.log(`Noting changed`);
        console.log(`=====================`);
    }
      
    static logTokenWasNotFound() {
        console.log(`Token was not found, please update your token list`);
    }

    static logNeedToFetchAccounts() {
        console.log(`investing token was not found. now fetch newest accounts...`);
    }
}