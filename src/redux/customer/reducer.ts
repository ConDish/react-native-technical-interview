import { produce } from 'immer';
import { createReducer } from 'redux-act';

import {
  saveLoggedData,
} from './actions';
import { customerInitialState, CustomerState } from './initial-state';


const customerReducer = createReducer<CustomerState>({}, customerInitialState);

customerReducer.on(saveLoggedData, (state, payload) => {
    return produce(state, (draftState) => {
        draftState.user = payload;
    });
});

export { customerReducer };