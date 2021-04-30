import { call, fork, put, takeLatest } from 'redux-saga/effects';


import { changeLanguage } from './actions';


function* changeLanguageSaga() {
    console.log('Change Language');
}

function* watchChangeLanguage(){
    yield takeLatest(changeLanguage, changeLanguageSaga);
}

const appSagas = [watchChangeLanguage].map(fork);

export { appSagas };