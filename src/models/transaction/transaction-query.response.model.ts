import {FxModel} from '../fx.model';
import {CustomerInfoModel} from '../customer-info.model';
import {MerchantModel} from '../merchant.model';
import {AcquirerTransactionsModel} from '../acquirer-transactions.model';
import {QueryResponseBaseModel} from '../base/query-response.base.model';

export interface TransactionQueryResponseModel extends QueryResponseBaseModel {
  data?: Array<{
    fx: FxModel;
    customerInfo?: CustomerInfoModel;
    merchant: MerchantModel;
    ipn: Array<string>;
    transaction: { merchant: { referenceNo: string, status: string, transactionId: string } };
    acquirer: AcquirerTransactionsModel;
    refundable: boolean
  }>
}
