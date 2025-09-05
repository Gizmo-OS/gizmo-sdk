// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AllInPricingAPI from './all-in-pricing';
import {
  Address,
  AllInPricing,
  AllInPricingCreateWholeLoanPricingParams,
  AllInPricingCreateWholeLoanPricingResponse,
  AppraiserLicense,
  CensusInformation,
  Context,
  Error,
  ErrorMessage,
  SmpError,
} from './all-in-pricing';

export class Loans extends APIResource {
  allInPricing: AllInPricingAPI.AllInPricing = new AllInPricingAPI.AllInPricing(this._client);
}

Loans.AllInPricing = AllInPricing;

export declare namespace Loans {
  export {
    AllInPricing as AllInPricing,
    type Address as Address,
    type AppraiserLicense as AppraiserLicense,
    type CensusInformation as CensusInformation,
    type Context as Context,
    type Error as Error,
    type ErrorMessage as ErrorMessage,
    type SmpError as SmpError,
    type AllInPricingCreateWholeLoanPricingResponse as AllInPricingCreateWholeLoanPricingResponse,
    type AllInPricingCreateWholeLoanPricingParams as AllInPricingCreateWholeLoanPricingParams,
  };
}
