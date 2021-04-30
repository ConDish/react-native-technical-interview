import { customerApi } from './customer';
import { bookApi } from './book';

const api = {
  ...customerApi,
  ...bookApi,
};

export default api;
