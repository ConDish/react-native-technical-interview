import { produce } from 'immer';
import { createReducer } from 'redux-act';

import { changeLanguage, setAppPartLoading, showErrorModal } from './actions';

import { appInitialState, AppState } from './initial-state';

const appReducer = createReducer<AppState>({}, appInitialState);

appReducer.on(changeLanguage, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.language = payload.language;
  });
});

appReducer.on(setAppPartLoading, (state, payload) => {
  const { name, isLoading } = payload;

  return produce(state, (draftState) => {
    if (draftState.appParts === undefined) {
      draftState.appParts = [];
    }
    const foundPart = draftState.appParts?.findIndex(
      (item) => item.name === name,
    );

    if (foundPart !== -1) {
      draftState.appParts[foundPart].isLoading = isLoading;
    } else {
      draftState.appParts.push({
        name,
        isLoading,
      });
    }
  });
});

appReducer.on(showErrorModal, (state, payload) => {
  const { message } = payload;
  return produce(state, (draftState) => {
    if (!draftState.errorModal) {
      draftState.errorModal = { message: '', isActive: false };
    }

    draftState.errorModal.isActive = true;
    draftState.errorModal.message = message;
  });
});

export { appReducer };
