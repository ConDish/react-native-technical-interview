import { createAction } from 'redux-act';

import { BookData } from './initial-state';

const getBooks = createAction('book/ getBooks');

const saveBooksData = createAction<BookData[]>('book/save books');

export { getBooks, saveBooksData };
