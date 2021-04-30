import { combineReducers } from 'redux';

import { appReducer } from './app';
import { customerReducer } from './customer';

const rootReducer = combineReducers({
  app: appReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
