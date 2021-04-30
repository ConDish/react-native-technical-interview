import { createAction } from 'redux-act';

const changeLanguage = createAction<{ language: string }>(
  'app/change language',
);

const showErrorModal = createAction<{ message: string }>('app/show error');

const setAppPartLoading = createAction<{
  name: string;
  isLoading: boolean;
}>('app/set part loading');

export { changeLanguage, setAppPartLoading, showErrorModal };
