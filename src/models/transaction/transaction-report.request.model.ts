export interface TransactionReportRequestModel {
  fromDate: Date;
  toDate: Date;
  merchant?: number;
  acquirer?: number;
}
