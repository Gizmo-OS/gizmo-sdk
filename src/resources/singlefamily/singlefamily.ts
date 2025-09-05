// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PricingAPI from './pricing/pricing';
import { Pricing } from './pricing/pricing';

export class Singlefamily extends APIResource {
  pricing: PricingAPI.Pricing = new PricingAPI.Pricing(this._client);
}

Singlefamily.Pricing = Pricing;

export declare namespace Singlefamily {
  export { Pricing as Pricing };
}
