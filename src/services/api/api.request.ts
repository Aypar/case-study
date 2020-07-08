import axios, {AxiosInstance, AxiosResponse, Method} from 'axios';
import {environment} from '../../environments/environment';
import {StorageService} from '../storage.service';

export class ApiRequest<T> {
  private method: Method;
  private useToken = true;
  private contentType: string;
  private baseUrl: string;
  private http: AxiosInstance;
  private endPoint: string;
  private data: any;
  private storageService: StorageService;

  constructor(type: Method, url, storageService: StorageService, data?: any) {
    this.storageService = storageService;
    this.init(type, url, data);
  }

  init(method: Method, endPoint: string, data?: any, contentType = this.contentType) {
    this.http = axios.create();
    this.method = method;
    this.baseUrl = environment.apiUrl;
    this.endPoint = endPoint;
    this.data = data;
    this.contentType = 'application/json';
  }

  execute(): Promise<AxiosResponse<T>> {
    return this.http.request<T>({
      baseURL: `${this.baseUrl}${this.endPoint}`,
      headers: this.getHeaders(),
      method: this.method,
      data: this.data
    }).then((response: AxiosResponse<T>) => {
      return response;
    }).catch(error => {
      return error;
    });
  }

  setUseToken(useToken: boolean) {
    this.useToken = useToken;
    return this;
  }


  getHeaders() {
    const headers = {
      'Content-Type': this.contentType,
    } as any;
    if (this.useToken) {
      headers.Authorization = this.storageService.getToken();
    }
    return headers;
  }
}

