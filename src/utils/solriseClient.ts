import { PublicKey } from "@solana/web3.js";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import Bottleneck from 'bottleneck';
import * as rax from 'retry-axios';

const SOLRISE_RPC = 'https://api-solrise.devnet.rpcpool.com/';

const FAILED_RESPONSE = {
  data: { success: false, result: null},
  status: 0,
  statusText: "failed",
  headers: "none",
  config: {},
  request: {}
} as AxiosResponse;

export class SolriseClient {
  private axiosInstance: AxiosInstance;
  private limiter: Bottleneck;

  constructor() {

    this.limiter = new Bottleneck({
        maxConcurrent: 1,
        minTime: 800
      });

    this.axiosInstance = axios.create({
      baseURL: SOLRISE_RPC,
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

    this.axiosInstance.interceptors.request.use(config => {
      const { data } = config;

      config.data = {
          'jsonrpc': '2.0',
          'id': 1,
          'method': data.method,
          'params': data.params
      };
      
      return config;
    });
  }

  private _get<T>(params: any = {}) {
    return this.limiter.schedule(
      () => this.axiosInstance
        .get<T>('', params)
    );
  }

  private _delete<T>(params: any = {}) {
    return this.limiter.schedule(
      () => this.axiosInstance
        .delete<T>('', params)
    );
  }

  private _post<T>(data: any = {}) {
    return this.limiter.schedule(
      ()  => this.axiosInstance
        .post<T>('', data)
    );
  }

  public getAccountInfo(pubKey: string)
  {
    return this._post<RpcResponse>({
      method: 'getAccountInfo',
      params: [pubKey, {encoding: 'base64', commitment: 'confirmed'}]
    } as RpcPayload)
  }

  public getMultipleAccounts(accounts: string[])
  {
    return this._post<RpcResponse>({
      method: 'getMultipleAccounts',
      params: [accounts, {encoding: 'jsonParsed', commitment: 'confirmed'}]
    } as RpcPayload)
  }
}

export interface RpcPayload {
  method: string,
  params: any[]
}

export interface RpcResponse {
  jsonRpc: string,
  result: RpcResult,
  id: number
}

export interface RpcResult {
  context: RpcResponseContext,
  value: any[]
}

export interface RpcResponseContext {
  slot: number
}

export interface AccountInfo<T> {
  data: T,
  executable: boolean,
  lamports: number,
  owner: string,
  rentEpoch: number
}

export interface Account {
  parsed: AccountParsed,
  program: string,
  space: number
}

export interface AccountParsed {
  info: TokenAccountInfo,
  type: string
}

export interface TokenAccountInfo {
  isNative: boolean,
  mint: string,
  owner: string,
  state: string,
  tokenAmount: TokenAmount
}

export interface TokenAmount {
  amount: string,
  decimals: number,
  uiAmount: number
  uiAmountString: string,
}