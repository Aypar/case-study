import {FxModel} from '../fx.model';
import {CustomerInfoModel} from '../customer-info.model';
import {AcquirerTransactionsModel} from '../acquirer-transactions.model';
import {MerchantModel} from '../merchant.model';

export class TransactionGetResponseModel {
  fx: Array<FxModel>;
  customerInfo: Array<CustomerInfoModel>;
  acquirerTransactions: Array<AcquirerTransactionsModel>;
  merchant: Array<MerchantModel>;
  merchantTransactions: Array<{ referenceNo: string, status: string }>;
}
