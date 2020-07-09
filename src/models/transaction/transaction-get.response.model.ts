import {FxModel} from '../fx.model';
import {CustomerInfoModel} from '../customer-info.model';
import {MerchantModel} from '../merchant.model';
import {TransactionModel} from './transaction.model';

export class TransactionGetResponseModel {
  fx: { merchant: FxModel };
  customerInfo: CustomerInfoModel;
  merchant: MerchantModel;
  transaction: { merchant: TransactionModel };
}

