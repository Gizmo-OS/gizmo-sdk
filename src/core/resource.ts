// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Gizmo } from '../client';

export abstract class APIResource {
  protected _client: Gizmo;

  constructor(client: Gizmo) {
    this._client = client;
  }
}
