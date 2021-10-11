import axios from 'axios';

const core = axios.create({
  baseURL: 'https://51f78f05-a4d3-47d8-bf3b-93ec7d260b8f.mock.pstmn.io',
});

class Request {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get = queryParams => core.get(this.endpoint, {params: queryParams});

  put = (queryParams, data) =>
    core.put(this.endpoint, data, {params: queryParams});

  post = (queryParams, data) =>
    core.post(this.endpoint, data, {params: queryParams});
}

export default Request;
