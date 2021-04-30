import { produce } from 'immer';
import { createReducer } from 'redux-act';

import { saveBooksData } from './actions';
import { bookInitialState, BookState } from './initial-state';

const bookReducer = createReducer<BookState>({}, bookInitialState);

bookReducer.on(saveBooksData, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.books = payload;
  });
});

export { bookReducer };
