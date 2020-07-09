import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {AxiosResponse} from 'axios';
import {ClientGetRequestModel} from '../../models/client/client-get.request.model';
import {ClientGetResponseModel} from '../../models/client/client-get.response.model';

@Injectable({providedIn: 'root'})
export class ClientService {
  constructor(private apiService: ApiService) {
  }

  get(query: ClientGetRequestModel): Promise<AxiosResponse<ClientGetResponseModel>> {
    return this.apiService.post<ClientGetResponseModel>('client', query).execute().then(response => {
      return response;
    }).catch(error => {
      throw error;
    });
  }

}
