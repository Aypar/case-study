import {Injectable} from '@angular/core';

import {TransactionGetResponseModel} from '../../models/transaction/transaction-get.response.model';
import {TransactionGetRequestModel} from '../../models/transaction/transaction-get.request.model';
import {ApiService} from './api.service';
import {AxiosResponse} from 'axios';

@Injectable({providedIn: 'root'})
export class ClientService {
  constructor(private apiService: ApiService) {
  }


  get(query: TransactionGetRequestModel): Promise<AxiosResponse<TransactionGetResponseModel>> {
    return this.apiService.post<TransactionGetResponseModel>('client', query).execute().then(response => {
      return response;
    });
  }

}
