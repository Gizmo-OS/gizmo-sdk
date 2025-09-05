// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LoansAPI from './loans/loans';
import { Loans } from './loans/loans';

export class Pricing extends APIResource {
  loans: LoansAPI.Loans = new LoansAPI.Loans(this._client);
}

Pricing.Loans = Loans;

export declare namespace Pricing {
  export { Loans as Loans };
}
