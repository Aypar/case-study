import axios, {AxiosError, AxiosInstance, AxiosResponse, Method} from 'axios';
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
  private directUrl: string;

  constructor(type: Method, url, storageService: StorageService, data?: any) {
    this.storageService = storageService;
    this.init(type, url, data);
  }

  init(method: Method, endPoint: string, data?: any, contentType = this.contentType) {
    this.http = axios.create(
      {
        validateStatus: (status) => {
          return true;
        }
      }
    );
    this.method = method;
    this.baseUrl = environment.apiUrl;
    this.endPoint = endPoint;
    this.data = data;
    this.contentType = 'application/json';
  }

  execute(): Promise<AxiosResponse<T>> | any {

    const requestUrl = this.directUrl ? this.directUrl : `${this.baseUrl}${this.endPoint}`;
    return this.http.request<T>({
      baseURL: requestUrl,
      headers: this.getHeaders(),
      method: this.method,
      data: this.data
    }).then((response: AxiosResponse<T>) => {
      if (response.status !== 200) {
        if (response.status === 401) {
          window.location.href = '/auth/login';
          return;
        }
        throw Error(response.statusText);
      }
      return response;
    });
  }

  setUseToken(useToken: boolean) {
    this.useToken = useToken;
    return this;
  }

  public setDirectUrl(url: string) {
    this.directUrl = url;
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

