import {Injectable} from '@angular/core';
import {StorageService} from '../storage.service';
import {TransactionReportResponseModel} from '../../models/transaction/transaction-report.response.model';
import {TransactionQueryResponseModel} from '../../models/transaction/transaction-query.response.model';
import {TransactionGetResponseModel} from '../../models/transaction/transaction-get.response.model';
import {TransactionQueryRequestModel} from '../../models/transaction/transaction-query.request.model';
import {TransactionReportRequestModel} from '../../models/transaction/transaction-report.request.model';
import {TransactionGetRequestModel} from '../../models/transaction/transaction-get.request.model';
import {ApiService} from './api.service';
import {AxiosError, AxiosResponse} from 'axios';

@Injectable({providedIn: 'root'})
export class TransactionService {
  constructor(private apiService: ApiService) {
  }

  report(query: TransactionReportRequestModel): Promise<AxiosResponse<TransactionReportResponseModel>>  {
    return this.apiService.post<TransactionReportResponseModel>('transactions/report', query).execute().then(response => {
      return response;
    }).catch((error) => {
      return error;
    });
  }

  query(query: TransactionQueryRequestModel): Promise<AxiosResponse<TransactionQueryResponseModel>>  {
    return this.apiService.post<TransactionQueryResponseModel>('transaction/list', query).execute().then(response => {
      return response;
    }).catch((error) => {
      return error;
    });
  }

  get(query: TransactionGetRequestModel): Promise<AxiosResponse<TransactionGetResponseModel>> {
    return this.apiService.post<TransactionGetResponseModel>('transaction', query).execute().then(response => {
      return response;
    }).catch((error) => {
      return error;
    });
  }

}
