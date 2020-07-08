import {FxModel} from '../fx.model';
import {CustomerInfoModel} from '../customer-info.model';
import {MerchantModel} from '../merchant.model';
import {AcquirerTransactionsModel} from '../acquirer-transactions.model';
import {QueryResponseBaseModel} from '../base/query-response.base.model';

export interface TransactionQueryResponseModel extends QueryResponseBaseModel {
  data?: Array<{
    fx: Array<FxModel>;
    customerInfo: Array<CustomerInfoModel>;
    merchant: Array<MerchantModel>;
    ipn: Array<string>;
    transaction: Array<{ referenceNo: string, status: string }>;
    acquirer: Array<AcquirerTransactionsModel>;
    refundable: boolean
  }>
}
