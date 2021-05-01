import { createAction } from 'redux-act';

import { CustomerData } from './initial-state';

const login = createAction<{
  name: string;
  last_name: string;
  email: string;
  age: string;
  termsAndCond: boolean;
}>('customer/ login');

const saveLoggedData = createAction<CustomerData>('customer/save user');

const logout = createAction('customer/logout');

export { login, saveLoggedData, logout };
