export interface TransactionReportResponseModel {
  status: string;
  response: {
    count: number;
    total: number;
    currency: string;
  }
}
