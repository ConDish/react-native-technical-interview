import { call, fork, put, takeLatest, all } from 'redux-saga/effects';
import api from '../api';

import { setAppPartLoading, showErrorModal } from '../app';
import { GetBooksResponse } from '../api/book/dto';
import { getBooks, saveBooksData } from './actions';
import { GenericApiResponse } from '../api/common';

function* getBooksSaga() {
  yield put(setAppPartLoading({ name: 'getBooks', isLoading: true }));
  try {
    const result: GenericApiResponse<GetBooksResponse[]> = yield call(
      api.getBooks,
    );
    if (!result.ok) {
      yield all([
        put(
          showErrorModal({
            message: result.message || 'Error',
          }),
        ),
      ]);
      return;
    }
    if (result.data) {
      yield put(saveBooksData(result.data || []));
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setAppPartLoading({ name: 'getBooks', isLoading: false }));
  }
}

function* watchGetBooks() {
  yield takeLatest(getBooks, getBooksSaga);
}

const bookSagas = [watchGetBooks].map(fork);

export { bookSagas };
