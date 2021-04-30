import { combineReducers } from 'redux';

import { appReducer } from './app';
import { customerReducer } from './customer';
import { bookReducer } from './book';

const rootReducer = combineReducers({
  app: appReducer,
  customer: customerReducer,
  book: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
