import { RootState } from '../reducer';

function selectLanguage(state: RootState): Object {
  return state.app.language;
}

function selectAppPartLoading(state: RootState, partName: string): boolean {
  const appPart = state.app?.appParts?.find((item) => item.name === partName);

  if (appPart) {
    return appPart.isLoading;
  }

  return false;
}

export { selectLanguage, selectAppPartLoading };
