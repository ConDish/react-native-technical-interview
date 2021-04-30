import {
  call,
  fork,
  put,
  select,
  takeLatest,
  all,
  delay,
} from 'redux-saga/effects';
import api from '../api';
import { GenericApiResponse } from '../api/common';
import { setAppPartLoading, showErrorModal } from '../app';

import { login, saveLoggedData } from './actions';

type ResponseRequest = {
  name: string;
  last_name: string;
  email: string;
  age: string;
  termsAndCond: boolean;
  id: number;
};

function* loginSaga({ payload }: ReturnType<typeof login>) {
  yield put(setAppPartLoading({ name: 'login', isLoading: true }));
  try {
    const { name, last_name, email, age, termsAndCond } = payload;
    const result: GenericApiResponse<ResponseRequest> = yield call(
      api.login,
      name,
      last_name,
      email,
      age,
      termsAndCond,
    );

    if (!result.ok) {
      yield all([
        put(setAppPartLoading({ name: 'login', isLoading: false })),
        put(
          showErrorModal({
            message:
              result.message ||
              'Tu consulta no es clara ¡Por favor intenta nuevamente!',
          }),
        ),
      ]);
      return;
    }

    if (result.data) {
      const {
        name: Name,
        last_name: Last_Name,
        email: Email,
        age: Age,
        termsAndCond: TermsAndCond,
      } = result.data;
      yield put(
        saveLoggedData({
          name: Name,
          last_name: Last_Name,
          email: Email,
          age: Age,
          termsAndCond: TermsAndCond,
        }),
      );
    }

    yield put(setAppPartLoading({ name: 'login', isLoading: false }));
  } catch (error) {
    console.log(error);
  }
}

function* watchLogin() {
  yield takeLatest(login, loginSaga);
}

const customerSagas = [watchLogin].map(fork);

export { customerSagas };
