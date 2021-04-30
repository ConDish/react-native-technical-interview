type AppPartState = {
  name: string;
  isLoading: boolean;
};

type ErrorModalState = {
  message: string;
  isActive: boolean;
};

export type AppState = {
  isAppLoading: boolean;
  errorModal: ErrorModalState;
  appParts: AppPartState[];
  language: string;
};

const appInitialState: AppState = {
  language: 'es',
  appParts: [
    {
      name: 'example-button-login',
      isLoading: false,
    },
  ],
  errorModal: {
    message: '',
    isActive: false,
  },
  isAppLoading: false,
};

export { appInitialState };
