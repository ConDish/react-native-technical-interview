import { all } from 'redux-saga/effects';

import { appSagas } from './app';
import { customerSagas } from './customer';


function* sagas() {
  yield all([
    ...customerSagas,
    ...appSagas,
  ]);
}

export default sagas;