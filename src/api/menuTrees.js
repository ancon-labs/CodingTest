import Request from './Request';

export default {
  get: {
    byId: new Request(
      '/api/v1.1/tenants/37e62df8-035c-4d32-86f8-0f8f1c2a15fd/MenuTrees/d1c0e829-abcb-4462-b0de-50d3959e0415',
    ).get,
  },
};
