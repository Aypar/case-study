import {BaseModel} from './base/base.model';

export interface CustomerInfoModel extends BaseModel {
  number: string;
  email: string;
  billingFirstName: string;
  billingLastName: string;
  billingAddress1: string;
  billingAddress2: string;
  billingCity: string;
  billingCompany: string;
  billingCountry: string;
  billingFax: string;
  billingPhone: string;
  billingPostcode: string;
  billingState: string;
  billingTitle: string;
  birthday: string;
  expiryMonth: string;
  expiryYear: string;
  gender: string;
  id: string;
  issueNumber: string;
  shippingAddress1: string;
  shippingAddress2: string;
  shippingCity: string;
  shippingCompany: string;
  shippingCountry: string;
  shippingFax: string;
  shippingFirstName: string;
  shippingLastName: string;
  shippingPhone: string;
  shippingPostcode: string;
  shippingState: string;
  shippingTitle: string;
  startMonth: string;
  startYear: string;
  token: string;

}
