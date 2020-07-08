import axios, {AxiosInstance} from 'axios';
import {ApiRequest} from './api.request';
import {StorageService} from '../storage.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private storageService: StorageService) {
  }


  get<T>(endPoint: string) {
    return new ApiRequest<T>('get', endPoint, this.storageService);
  }

  post<T>(endPoint: string, data?: any) {
    return new ApiRequest<T>('post', endPoint, this.storageService,data);
  }

  put<T>(endPoint: string, data?: any) {
    return new ApiRequest<T>('put', endPoint, this.storageService,data);
  }

  delete<T>(endPoint: string, data?: any) {
    return new ApiRequest<T>('post', endPoint, this.storageService,data);
  }
}
