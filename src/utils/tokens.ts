const TOKENMAPS : Token[] = [
    {
        fullName: 'USDC',
        name: 'usdc',
        mint: '2aqBRavq4UxeQys6ABue8zWxaJZAB9sbBRNFY3kX7p31'
    },
    { 
        fullName: 'Bitcoin',
        name: 'btc', 
        mint: 'FYaRg2Di29JALi5B5YtAvQahJZLbZDVAFYW3JmpMrWW' 
    },
    { 
        fullName: 'Ethereum',
        name: 'eth', 
        mint: 'AHEAwFN1qxoNMkcsRopYikgSRhiKkKUjcVux5qCBcxkj' 
    },
    { 
        fullName: 'Ripple',
        name: 'xrp', 
        mint: '7yBAhJdvH8wtWp4mdPYNj1MPiCCdqDfG7ge4u9imPcnw' 
    },
    { 
        fullName: 'Solana',
        name: 'sol', 
        mint: 'Csd6HUGPaenA3Kwhms2pm6pR3hJ7hdh4H2ejF9hKykkY' 
    },
    { 
        fullName: 'Serum',
        name: 'srm', 
        mint: 'Pr3EmS5XYWwo8R28xXYQv3fLDudQFv9jvMmHsqHPwES' 
    },
    {
        fullName: 'Sushi',
        name: 'sushi',
        mint: 'GQQJXvQfzGUFfzJcLjkyM2Ziq3snmE4VFVcV2JUKcJrM'
    },
    {
        fullName: 'Link',
        name: 'link',
        mint: '5QSqnXtuiRxLafC1zqq4DqydFDzxsDjokCJSqF8hB5vZ'
    },
    { 
        fullName: 'FTX Token',
        name: 'ftt', 
        mint: 'A6TviEuVTijiihS4SbFS9Y9eZbT8PPk84fBQ4xuAbjJR' 
    },
    { 
        fullName: 'Binance Coin',
        name: 'bnb', 
        mint: '4C4HbpFFKrDjBYaRue6yxW5vT6d9Rz7baYXoB6MzXMFP' 
    },
    { 
        fullName: 'Polkdot',
        name: 'dot', 
        mint: '21QeB8g5scwR1PbYoUfYJmkkx22Uu7fc1GPxgypWi7eK' 
    },
    { 
        fullName: 'Bitcoin Cash',
        name: 'bch', 
        mint: 'FL84oLhoNAJQQNVtSd3sJBLbN3ov5wxyGbe8UTiAD9ZR' 
    },
    { 
        fullName: 'Cardano',
        name: 'ada', 
        mint: 'PmpH2ay2kcQdYdS4SsUdNe4KJfPJqQc2hCdzEQf4Avy' 
    },
    { 
        fullName: 'Internet Computer',
        name: 'icp', 
        mint: 'BVb7R64HHuKYPwkGhCUxQxxsxpzaUKcuxsDbMUDfLpbs' 
    },
    {
        fullName: 'PancakeSwap',
        name: 'cake',
        mint: '88iaqzemdz7uBvCgp8YBGP9Hf394SuKbnGGDNRxRuGdH'
    },
    {
        fullName: 'THORChain',
        name: 'rune',
        mint: '2qFcXo8G7XkRXFPMP96shumCvjcae9jymonFudMCAeuW'
    },
    {
        fullName: 'Unisocks',
        name: 'socks',
        mint: 'EfA5bnaNnABPrVigAMnE3gTLDoFC2WwEpx1ekrLkMNG2'
    },
    {
        fullName: 'Dogecoin',
        name: 'doge',
        mint: 'At3cSnA8VicjcwvLe63RayUwmNc4sVxcSwLTAdNu7f16'
    },
    {
        fullName: 'Shiba Inu',
        name: 'shib',
        mint: 'EuD7YxbqJ7hidTGsnHT79H54SGshZx1dw4gmWf2LfcPx'
    },
    {
        fullName: 'SamoyedCoin',
        name: 'samo',
        mint: '3FnqS6QE4eiLWVGyMKT5H1h4u9xTub7Ex3HEcqmptiV4'
    },
    {
        fullName: 'Step Finance',
        name: 'step',
        mint: 'AwXdQ2aWs62hiTZjVLgF5UGeMfp3ujZJBqxfLM4DjGQY'
    },
    {
        fullName: 'Cope',
        name: 'cope',
        mint: 'B3Fs4FZJ2f3VYgoNpNZqFzy4Mk6hZFrZXXrTquiozaqZ'
    },
    {
        fullName: 'Bonfida',
        name: 'fida',
        mint: '8H5hGFNGayrzL9UBDwQS9VS9j6CP4yS2f6hXvNyFDCWB'
    },
    { 
        fullName: 'Uniswap',
        name: 'uni', 
        mint: '7TWmp8n6M8RaSCFEB8dj6dYT299RneJ9QFRk3KMyA9aD' 
    },
    { 
        fullName: 'Ethereum Classic',
        name: 'etc', 
        mint: 'GCgKYNGucy97cBeAvgSGoaibMihkFdsnkzCVTRJXo9D' 
    },
    { 
        fullName: 'Stellar',
        name: 'xlm', 
        mint: 'DPdUr2oC3YsbPejtLooMNthpsWSZ5f6m9e4HQ1N8cgRt' 
    },
    { 
        fullName: 'VeChain',
        name: 'vet', 
        mint: 'FMU7bF7RXAzyb2kHHnPpWQt1qG5yXoLyRJH7mKv4Tbpv' 
    },
    { 
        fullName: 'Oxygen',
        name: 'oxy', 
        mint: '7qSZuhuMvcohMo8kbzfymJqh1NFkYc1A23CP3ip8Ux12' 
    },
    { 
        fullName: 'Mercurial Finance',
        name: 'mer', 
        mint: '5LhM8FQ8oxsJMG2EEF8yeHZEeERbGdCZUf5KLMscDCDL' 
    },
    { 
        fullName: 'yearn.finance',
        name: 'yfi', 
        mint: 'J1DNvob28HgpzukrdGqEGPdE5pRLBbtpvdwURyKU9Ymr' 
    },
    {
        fullName: 'SafeMoon',
        name: 'safemoon',
        mint: 'HqMXoohEXbPCrVDcsDaM42wj5NiP6tZL4s3WvgSdq9qR'
    },
    {
        fullName: '3X Long Bitcoin Token',
        name: 'bull',
        mint: 'Fcgo5xK2Td5SALSb4k93vmgm4MUXYuoak1PuvmNYzPq2'
    },
    {
        fullName: '3X Short Bitcoin Token',
        name: 'bear',
        mint: '5ghXuJUkdJrzeGMSTLBMJq4WSm8Q63pcHU8nchNC4S6H'
    },
    {
        fullName: '3X Long Ethereum Token',
        name: 'ethbull',
        mint: 'GWNHKeRfQNK6pZaqBNjaboHgZhJRdBNVmx1Sp5xbSWew'
    },
    {
        fullName: '1X Short Shitcoin Index Token',
        name: 'hedgeshit',
        mint: 'CKrkDRRT6YyQVBQsL1gFKtiDaMsXLrYSvTEPPLBjeTFt'
    },
    {
        fullName: '3X Short Shitcoin Index Token',
        name: 'bearshit',
        mint: 'GXoJ5DuWGkQy9kdtBMNFmWsEQMKHDtNTGHeSFaTNmV1r'
    },
    {
        fullName: '0.5X Long Shitcoin Index Token',
        name: 'halfshit',
        mint: '6omMcBEBwvYDMw9JtRmEHPdhJa2AmPgYd6whc4yDABdS'
    },
    {
        fullName: '3X Long Shitcoin Index Token',
        name: 'bullshit',
        mint: 'BUmCwTrWytEkmDBSMaat5iVGxT94fVmdeu28cTxYUA4M'
    },
    {
        fullName: '0.5X Long Dogecoin Token',
        name: 'dogehalf',
        mint: '526Gbo14LrXeTEpzi82wX1XFCXiS8m4wWP3zSVL3mZBP'
    },
    {
        fullName: '1X Short Dogecoin Token',
        name: 'dogehedge',
        mint: '6cpV4HgrkQBWbh6w3JYNK2ZbSaT5Cv7n5vaHDKAyKatm'
    }
]

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