const TOKENMAPS : Token[] = [
    {
        "fullName":"USDC",
        "name":"usdc",
        "mint":"2aqBRavq4UxeQys6ABue8zWxaJZAB9sbBRNFY3kX7p31"
    },
    {
        "fullName":"Bitcoin",
        "name":"btc",
        "mint":"FYaRg2Di29JALi5B5YtAvQahJZLbZDVAFYW3JmpMrWW"
    },
    {
        "fullName":"Ethereum",
        "name":"eth",
        "mint":"AHEAwFN1qxoNMkcsRopYikgSRhiKkKUjcVux5qCBcxkj"
    },
    {
        "fullName":"Ripple",
        "name":"xrp",
        "mint":"7yBAhJdvH8wtWp4mdPYNj1MPiCCdqDfG7ge4u9imPcnw"
    },
    {
        "fullName":"Solana",
        "name":"sol",
        "mint":"Csd6HUGPaenA3Kwhms2pm6pR3hJ7hdh4H2ejF9hKykkY"
    },
    {
        "fullName":"Serum",
        "name":"srm",
        "mint":"Pr3EmS5XYWwo8R28xXYQv3fLDudQFv9jvMmHsqHPwES"
    },
    {
        "fullName":"Sushi",
        "name":"sushi",
        "mint":"GQQJXvQfzGUFfzJcLjkyM2Ziq3snmE4VFVcV2JUKcJrM"
    },
    {
        "fullName":"Link",
        "name":"link",
        "mint":"5QSqnXtuiRxLafC1zqq4DqydFDzxsDjokCJSqF8hB5vZ"
    },
    {
        "fullName":"FTX Token",
        "name":"ftt",
        "mint":"A6TviEuVTijiihS4SbFS9Y9eZbT8PPk84fBQ4xuAbjJR"
    },
    {
        "fullName":"Binance Coin",
        "name":"bnb",
        "mint":"4C4HbpFFKrDjBYaRue6yxW5vT6d9Rz7baYXoB6MzXMFP"
    },
    {
        "fullName":"Polkdot",
        "name":"dot",
        "mint":"21QeB8g5scwR1PbYoUfYJmkkx22Uu7fc1GPxgypWi7eK"
    },
    {
        "fullName":"Bitcoin Cash",
        "name":"bch",
        "mint":"FL84oLhoNAJQQNVtSd3sJBLbN3ov5wxyGbe8UTiAD9ZR"
    },
    {
        "fullName":"Cardano",
        "name":"ada",
        "mint":"PmpH2ay2kcQdYdS4SsUdNe4KJfPJqQc2hCdzEQf4Avy"
    },
    {
        "fullName":"Internet Computer",
        "name":"icp",
        "mint":"BVb7R64HHuKYPwkGhCUxQxxsxpzaUKcuxsDbMUDfLpbs"
    },
    {
        "fullName":"PancakeSwap",
        "name":"cake",
        "mint":"88iaqzemdz7uBvCgp8YBGP9Hf394SuKbnGGDNRxRuGdH"
    },
    {
        "fullName":"THORChain",
        "name":"rune",
        "mint":"2qFcXo8G7XkRXFPMP96shumCvjcae9jymonFudMCAeuW"
    },
    {
        "fullName":"Dogecoin",
        "name":"doge",
        "mint":"At3cSnA8VicjcwvLe63RayUwmNc4sVxcSwLTAdNu7f16"
    },
    {
        "fullName":"Step Finance",
        "name":"step",
        "mint":"AwXdQ2aWs62hiTZjVLgF5UGeMfp3ujZJBqxfLM4DjGQY"
    },
    {
        "fullName":"Cope",
        "name":"cope",
        "mint":"B3Fs4FZJ2f3VYgoNpNZqFzy4Mk6hZFrZXXrTquiozaqZ"
    },
    {
        "fullName":"Bonfida",
        "name":"fida",
        "mint":"8H5hGFNGayrzL9UBDwQS9VS9j6CP4yS2f6hXvNyFDCWB"
    },
    {
        "fullName":"Uniswap",
        "name":"uni",
        "mint":"7TWmp8n6M8RaSCFEB8dj6dYT299RneJ9QFRk3KMyA9aD"
    },
    {
        "fullName":"Ethereum Classic",
        "name":"etc",
        "mint":"GCgKYNGucy97cBeAvgSGoaibMihkFdsnkzCVTRJXo9D"
    },
    {
        "fullName":"Stellar",
        "name":"xlm",
        "mint":"DPdUr2oC3YsbPejtLooMNthpsWSZ5f6m9e4HQ1N8cgRt"
    },
    {
        "fullName":"VeChain",
        "name":"vet",
        "mint":"FMU7bF7RXAzyb2kHHnPpWQt1qG5yXoLyRJH7mKv4Tbpv"
    },
    {
        "fullName":"Oxygen",
        "name":"oxy",
        "mint":"7qSZuhuMvcohMo8kbzfymJqh1NFkYc1A23CP3ip8Ux12"
    },
    {
        "fullName":"Mercurial Finance",
        "name":"mer",
        "mint":"5LhM8FQ8oxsJMG2EEF8yeHZEeERbGdCZUf5KLMscDCDL"
    },
    {
        "fullName":"yearn.finance",
        "name":"yfi",
        "mint":"J1DNvob28HgpzukrdGqEGPdE5pRLBbtpvdwURyKU9Ymr"
    },
    {
        "fullName":"3X Long Bitcoin Token",
        "name":"bull",
        "mint":"Fcgo5xK2Td5SALSb4k93vmgm4MUXYuoak1PuvmNYzPq2"
    },
    {
        "fullName":"3X Long Ethereum Token",
        "name":"ethbull",
        "mint":"GWNHKeRfQNK6pZaqBNjaboHgZhJRdBNVmx1Sp5xbSWew"
    },
    {
        "fullName":"1X Short Shitcoin Index Token",
        "name":"hedgeshit",
        "mint":"CKrkDRRT6YyQVBQsL1gFKtiDaMsXLrYSvTEPPLBjeTFt"
    },
    {
        "fullName":"3X Long Shitcoin Index Token",
        "name":"bullshit",
        "mint":"BUmCwTrWytEkmDBSMaat5iVGxT94fVmdeu28cTxYUA4M"
    },
    {
        "fullName":"1X Short Dogecoin Token",
        "name":"dogehedge",
        "mint":"6cpV4HgrkQBWbh6w3JYNK2ZbSaT5Cv7n5vaHDKAyKatm"
    },
    {
        "fullName":"1X Short Altcoin Index Token",
        "name":"althedge",
        "mint":"4sXsJ4CQjxoZGiABEz23cZy5sCUtzboTEufZPQfMf5nS"
    },
    {
        "fullName":"1X Short Bitcoin Token",
        "name":"hedge",
        "mint":"C3B4GaJySgRFVCPTe6Jm9JQkQVQmyFUZNoAWBBeCuMny"
    },
    {
        "fullName":"3X Long Dogecoin Token",
        "name":"dogebull",
        "mint":"FvrExdK4WmimrToTLcG4Z3Q2Z7XwUf95cuFnbWGWa3pz"
    },
    {
        "fullName":"3X Long Altcoin Index Token",
        "name":"altbull",
        "mint":"EJsQY6MQgLeRj7oDH6VeymqUK4ChtJ1pw1YWqGE3Vy2u"
    }
];

export interface Token {
    fullName: string,
    name: string,
    mint: string  
} 

export function getToken(mint: string) {
    const token = TOKENMAPS.find(token => token.mint == mint);
    
    if(token)
    {
        return token;
    }
    else
    {
        return "";
    }
}

export function logAllTokensInJson() {
    let tokens: Token[] = [];

    console.log('[\n');

    mintKeys.forEach(key => {
        console.log(JSON.stringify({
            fullName: '',
            name: key,
            mint: mintObjs[key]
        }));

        console.log('\n');
    });

    console.log(']');

    console.log();
}

const mintKeys = [
    "usdc",
    "btc",
    "eth",
    "xrp",
    "sol",
    "srm",
    "sushi",
    "link",
    "ftt",
    "bnb",
    "dot",
    "bch",
    "ada",
    "icp",
    "cake",
    "rune",
    "doge",
    "step",
    "cope",
    "fida",
    "uni",
    "etc",
    "xlm",
    "vet",
    "oxy",
    "mer",
    "yfi",
    "bull",
    "ethbull",
    "hedgeshit",
    "bullshit",
    "dogehedge",
    "althedge",
    "hedge",
    "dogebull",
    "altbull"
];

const mintObjs = {
    "usdc": "2aqBRavq4UxeQys6ABue8zWxaJZAB9sbBRNFY3kX7p31",
    "btc": "FYaRg2Di29JALi5B5YtAvQahJZLbZDVAFYW3JmpMrWW",
    "eth": "AHEAwFN1qxoNMkcsRopYikgSRhiKkKUjcVux5qCBcxkj",
    "xrp": "7yBAhJdvH8wtWp4mdPYNj1MPiCCdqDfG7ge4u9imPcnw",
    "sol": "Csd6HUGPaenA3Kwhms2pm6pR3hJ7hdh4H2ejF9hKykkY",
    "srm": "Pr3EmS5XYWwo8R28xXYQv3fLDudQFv9jvMmHsqHPwES",
    "sushi": "GQQJXvQfzGUFfzJcLjkyM2Ziq3snmE4VFVcV2JUKcJrM",
    "link": "5QSqnXtuiRxLafC1zqq4DqydFDzxsDjokCJSqF8hB5vZ",
    "ftt": "A6TviEuVTijiihS4SbFS9Y9eZbT8PPk84fBQ4xuAbjJR",
    "bnb": "4C4HbpFFKrDjBYaRue6yxW5vT6d9Rz7baYXoB6MzXMFP",
    "dot": "21QeB8g5scwR1PbYoUfYJmkkx22Uu7fc1GPxgypWi7eK",
    "bch": "FL84oLhoNAJQQNVtSd3sJBLbN3ov5wxyGbe8UTiAD9ZR",
    "ada": "PmpH2ay2kcQdYdS4SsUdNe4KJfPJqQc2hCdzEQf4Avy",
    "icp": "BVb7R64HHuKYPwkGhCUxQxxsxpzaUKcuxsDbMUDfLpbs",
    "cake": "88iaqzemdz7uBvCgp8YBGP9Hf394SuKbnGGDNRxRuGdH",
    "rune": "2qFcXo8G7XkRXFPMP96shumCvjcae9jymonFudMCAeuW",
    "doge": "At3cSnA8VicjcwvLe63RayUwmNc4sVxcSwLTAdNu7f16",
    "step": "AwXdQ2aWs62hiTZjVLgF5UGeMfp3ujZJBqxfLM4DjGQY",
    "cope": "B3Fs4FZJ2f3VYgoNpNZqFzy4Mk6hZFrZXXrTquiozaqZ",
    "fida": "8H5hGFNGayrzL9UBDwQS9VS9j6CP4yS2f6hXvNyFDCWB",
    "uni": "7TWmp8n6M8RaSCFEB8dj6dYT299RneJ9QFRk3KMyA9aD",
    "etc": "GCgKYNGucy97cBeAvgSGoaibMihkFdsnkzCVTRJXo9D",
    "xlm": "DPdUr2oC3YsbPejtLooMNthpsWSZ5f6m9e4HQ1N8cgRt",
    "vet": "FMU7bF7RXAzyb2kHHnPpWQt1qG5yXoLyRJH7mKv4Tbpv",
    "oxy": "7qSZuhuMvcohMo8kbzfymJqh1NFkYc1A23CP3ip8Ux12",
    "mer": "5LhM8FQ8oxsJMG2EEF8yeHZEeERbGdCZUf5KLMscDCDL",
    "yfi": "J1DNvob28HgpzukrdGqEGPdE5pRLBbtpvdwURyKU9Ymr",
    "bull": "Fcgo5xK2Td5SALSb4k93vmgm4MUXYuoak1PuvmNYzPq2",
    "ethbull": "GWNHKeRfQNK6pZaqBNjaboHgZhJRdBNVmx1Sp5xbSWew",
    "hedgeshit": "CKrkDRRT6YyQVBQsL1gFKtiDaMsXLrYSvTEPPLBjeTFt",
    "bullshit": "BUmCwTrWytEkmDBSMaat5iVGxT94fVmdeu28cTxYUA4M",
    "dogehedge": "6cpV4HgrkQBWbh6w3JYNK2ZbSaT5Cv7n5vaHDKAyKatm",
    "althedge": "4sXsJ4CQjxoZGiABEz23cZy5sCUtzboTEufZPQfMf5nS",
    "hedge": "C3B4GaJySgRFVCPTe6Jm9JQkQVQmyFUZNoAWBBeCuMny",
    "dogebull": "FvrExdK4WmimrToTLcG4Z3Q2Z7XwUf95cuFnbWGWa3pz",
    "altbull": "EJsQY6MQgLeRj7oDH6VeymqUK4ChtJ1pw1YWqGE3Vy2u"
};