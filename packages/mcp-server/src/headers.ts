// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'gizmo';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    Array.isArray(req.headers['x-fnma-api-key']) ?
      req.headers['x-fnma-api-key'][0]
    : req.headers['x-fnma-api-key'];
  return { apiKey };
};
