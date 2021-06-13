import { PublicKey } from "@solana/web3.js";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import Bottleneck from 'bottleneck';
import * as rax from 'retry-axios';

const SOLRISE_API_ENDPOINT = 'https://api-dawn.solrise.finance/api/v2';

const FAILED_RESPONSE = {
  data: { success: false, result: null},
  status: 0,
  statusText: "failed",
  headers: "none",
  config: {},
  request: {}
} as AxiosResponse;

export class SolriseApiClient {
  private axiosInstance: AxiosInstance;
  private limiter: Bottleneck;

  constructor() {

    this.limiter = new Bottleneck({
        maxConcurrent: 1,
        minTime: 800
      });

    this.axiosInstance = axios.create({
      baseURL: SOLRISE_API_ENDPOINT,
      timeout: 5000,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    this.axiosInstance.defaults.raxConfig = {
      instance: this.axiosInstance
    };
    const interceptorId = rax.attach(this.axiosInstance);
  }

  private _get<T>(endpoint: string, params: any = {}) {
    return this.limiter.schedule(
      () => this.axiosInstance
        .get<T>(endpoint, params)
    );
  }

  private _delete<T>(endpoint: string, params: any = {}) {
    return this.limiter.schedule(
      () => this.axiosInstance
        .delete<T>(endpoint, params)
    );
  }

  private _post<T>(endpoint: string, data: any = {}) {
    return this.limiter.schedule(
      ()  => this.axiosInstance
        .post<T>(endpoint, data)
    );
  }

  public getFund(fundId: PublicKey) {
    return this._get<ApiResponse<Fund>>(
        `/funds/${fundId.toString()}`
    );
  }
}

export interface ApiResponse<T> {
  data: T
}

export interface Fund {
  assets: Asset[],
  holders: Holder[],
  info: Info,
  initialized: boolean,
  investorsCount: number,
  manager: Manager,
  mint: PublicKey,
  owner: PublicKey,
  pubkey: PublicKey,
  totalInvestedUi: number,
  totalReturn: number,
  totalSupply: string,
  totalValue: string,
  totalValueUi: number
}

export interface Asset {
  balnce: Balance,
  mint: PublicKey,
  pubkey: PublicKey,
  value: any | null
}

export interface Balance {
  amount: number,
  decimals: number,
  uiAmount: number
}

export interface Holder {
  amount: number,
  owner: PublicKey,
  pubkey: PublicKey
}

export interface Info {
  fundDescription: string | null,
  fundDiscord: string | null,
  fundName: string,
  fundTelegram: string | null,
  fundTwitter: string | null,
  timestamp: Date
}

export interface Manager {
  image: string,
  username: string
}