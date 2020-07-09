import {BaseModel} from '../base/base.model';

export interface TransactionModel extends BaseModel {
  acquirerTransactionId?: string;
  agent?: string;
  agentInfoId?: string;
  chainId?: string;
  channel?: string;
  code?: string;
  customData?: string;
  fxTransactionId?: string;
  id?: string;
  merchantId?: string;
  message?: string;
  operation?: string;
  referenceNo?: string;
  status?: string;
  transactionId?: string;
  type?: string;
}
