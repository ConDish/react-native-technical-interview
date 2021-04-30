import { create } from 'apisauce';

import { API_URL } from '../../config';

const request = create({
  baseURL: API_URL,
});

export default request;
