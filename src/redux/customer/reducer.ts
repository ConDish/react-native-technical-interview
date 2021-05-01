import { produce } from 'immer';
import { createReducer } from 'redux-act';

import { saveLoggedData, logout } from './actions';
import { customerInitialState, CustomerState } from './initial-state';

const customerReducer = createReducer<CustomerState>({}, customerInitialState);

customerReducer.on(saveLoggedData, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.user = payload;
  });
});

customerReducer.on(logout, (state) => {
  return produce(state, (draftState) => {
    draftState.user = customerInitialState.user;
  });
});

export { customerReducer };
