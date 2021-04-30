import { RootState } from '../reducer';

function isLogged(state: RootState): boolean {
  return Object.keys(state.customer.user).length > 0 ? true : false;
}

export {
    isLogged,
};