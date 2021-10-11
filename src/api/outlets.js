import Request from './Request';

export default {
  get: {
    byId: new Request('/api/v1.1/outlets/2600256c-464c-4592-8b39-da07768a5b14')
      .get,
  },
};
