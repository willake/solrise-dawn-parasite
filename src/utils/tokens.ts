const TOKENMAPS : Token[] = [
    {
      name: 'usdc',
      mint: '2aqBRavq4UxeQys6ABue8zWxaJZAB9sbBRNFY3kX7p31'
    },
    { name: 'btc', mint: 'FYaRg2Di29JALi5B5YtAvQahJZLbZDVAFYW3JmpMrWW' },
    { name: 'eth', mint: 'AHEAwFN1qxoNMkcsRopYikgSRhiKkKUjcVux5qCBcxkj' },
    { name: 'xrp', mint: '7yBAhJdvH8wtWp4mdPYNj1MPiCCdqDfG7ge4u9imPcnw' },
    { name: 'sol', mint: 'Csd6HUGPaenA3Kwhms2pm6pR3hJ7hdh4H2ejF9hKykkY' },
    { name: 'srm', mint: 'Pr3EmS5XYWwo8R28xXYQv3fLDudQFv9jvMmHsqHPwES' },
    {
      name: 'sushi',
      mint: 'GQQJXvQfzGUFfzJcLjkyM2Ziq3snmE4VFVcV2JUKcJrM'
    },
    {
      name: 'link',
      mint: '5QSqnXtuiRxLafC1zqq4DqydFDzxsDjokCJSqF8hB5vZ'
    },
    { name: 'ftt', mint: 'A6TviEuVTijiihS4SbFS9Y9eZbT8PPk84fBQ4xuAbjJR' },
    { name: 'bnb', mint: '4C4HbpFFKrDjBYaRue6yxW5vT6d9Rz7baYXoB6MzXMFP' },
    { name: 'dot', mint: '21QeB8g5scwR1PbYoUfYJmkkx22Uu7fc1GPxgypWi7eK' },
    { name: 'bch', mint: 'FL84oLhoNAJQQNVtSd3sJBLbN3ov5wxyGbe8UTiAD9ZR' },
    { name: 'ada', mint: 'PmpH2ay2kcQdYdS4SsUdNe4KJfPJqQc2hCdzEQf4Avy' },
    { name: 'icp', mint: 'BVb7R64HHuKYPwkGhCUxQxxsxpzaUKcuxsDbMUDfLpbs' },
    {
      name: 'cake',
      mint: '88iaqzemdz7uBvCgp8YBGP9Hf394SuKbnGGDNRxRuGdH'
    },
    {
      name: 'rune',
      mint: '2qFcXo8G7XkRXFPMP96shumCvjcae9jymonFudMCAeuW'
    },
    {
      name: 'socks',
      mint: 'EfA5bnaNnABPrVigAMnE3gTLDoFC2WwEpx1ekrLkMNG2'
    },
    {
      name: 'doge',
      mint: 'At3cSnA8VicjcwvLe63RayUwmNc4sVxcSwLTAdNu7f16'
    },
    {
      name: 'shib',
      mint: 'EuD7YxbqJ7hidTGsnHT79H54SGshZx1dw4gmWf2LfcPx'
    },
    {
      name: 'samo',
      mint: '3FnqS6QE4eiLWVGyMKT5H1h4u9xTub7Ex3HEcqmptiV4'
    },
    {
      name: 'step',
      mint: 'AwXdQ2aWs62hiTZjVLgF5UGeMfp3ujZJBqxfLM4DjGQY'
    },
    {
      name: 'cope',
      mint: 'B3Fs4FZJ2f3VYgoNpNZqFzy4Mk6hZFrZXXrTquiozaqZ'
    },
    {
      name: 'fida',
      mint: '8H5hGFNGayrzL9UBDwQS9VS9j6CP4yS2f6hXvNyFDCWB'
    },
    { name: 'uni', mint: '7TWmp8n6M8RaSCFEB8dj6dYT299RneJ9QFRk3KMyA9aD' },
    { name: 'etc', mint: 'GCgKYNGucy97cBeAvgSGoaibMihkFdsnkzCVTRJXo9D' },
    { name: 'xlm', mint: 'DPdUr2oC3YsbPejtLooMNthpsWSZ5f6m9e4HQ1N8cgRt' },
    { name: 'vet', mint: 'FMU7bF7RXAzyb2kHHnPpWQt1qG5yXoLyRJH7mKv4Tbpv' },
    { name: 'oxy', mint: '7qSZuhuMvcohMo8kbzfymJqh1NFkYc1A23CP3ip8Ux12' },
    { name: 'mer', mint: '5LhM8FQ8oxsJMG2EEF8yeHZEeERbGdCZUf5KLMscDCDL' },
    { name: 'yfi', mint: 'J1DNvob28HgpzukrdGqEGPdE5pRLBbtpvdwURyKU9Ymr' },
    {
      name: 'safemoon',
      mint: 'HqMXoohEXbPCrVDcsDaM42wj5NiP6tZL4s3WvgSdq9qR'
    },
    {
      name: 'bull',
      mint: 'Fcgo5xK2Td5SALSb4k93vmgm4MUXYuoak1PuvmNYzPq2'
    },
    {
      name: 'bear',
      mint: '5ghXuJUkdJrzeGMSTLBMJq4WSm8Q63pcHU8nchNC4S6H'
    },
    {
      name: 'ethbull',
      mint: 'GWNHKeRfQNK6pZaqBNjaboHgZhJRdBNVmx1Sp5xbSWew'
    },
    {
      name: 'hedgeshit',
      mint: 'CKrkDRRT6YyQVBQsL1gFKtiDaMsXLrYSvTEPPLBjeTFt'
    },
    {
      name: 'bearshit',
      mint: 'GXoJ5DuWGkQy9kdtBMNFmWsEQMKHDtNTGHeSFaTNmV1r'
    },
    {
      name: 'halfshit',
      mint: '6omMcBEBwvYDMw9JtRmEHPdhJa2AmPgYd6whc4yDABdS'
    },
    {
      name: 'bullshit',
      mint: 'BUmCwTrWytEkmDBSMaat5iVGxT94fVmdeu28cTxYUA4M'
    },
    {
      name: 'dogehalf',
      mint: '526Gbo14LrXeTEpzi82wX1XFCXiS8m4wWP3zSVL3mZBP'
    },
    {
      name: 'dogehedge',
      mint: '6cpV4HgrkQBWbh6w3JYNK2ZbSaT5Cv7n5vaHDKAyKatm'
    }
]

export interface Token {
    name: string,
    mint: string  
} 

export function getTokenName(mint: string) {
    const token = TOKENMAPS.find(token => token.mint == mint);
    
    if(token)
    {
        return token.name;
    }
    else
    {
        return "";
    }
}