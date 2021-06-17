import { InvestingToken } from './models';

export class Logger {
    static logAccountStatus(myInvestingToken: InvestingToken, targetInvestingToken: InvestingToken) {
        const now = new Date();
        console.log(`Now - ${now.toLocaleTimeString()}`);
        console.log(`Mine - ${JSON.stringify(myInvestingToken)}`);
        console.log(`Target - ${JSON.stringify(targetInvestingToken)}`);
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
      
    static logTokenNotFound() {
        console.log(`Token was not found, please update your token list`);
    }
}