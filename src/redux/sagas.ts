import { all } from 'redux-saga/effects';

import { appSagas } from './app';
import { customerSagas } from './customer';
import { bookSagas } from './book';

function* sagas() {
  yield all([...customerSagas, ...appSagas, ...bookSagas]);
}

export default sagas;
