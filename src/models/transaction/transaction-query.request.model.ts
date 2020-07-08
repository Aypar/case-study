export interface TransactionQueryRequestModel {
  fromDate?:string;
  toDate?:string;
  status?:string;
  operation?:string;
  merchantId?:number
  acquirerId?:number;
  paymentMethod?:string;
  errorCode?:string;
  filterField?:string;
  filterValue?:string;
  page?:number;
}
