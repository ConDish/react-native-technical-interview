import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useTypedSelector } from '../../hooks';
import I18n from '../../I18n';
import { SpinnerStyled } from './style';

type AppContainerProps = {
  children: JSX.Element | JSX.Element[];
};

function AppContainer(props: AppContainerProps) {
  const isAppLoading = useTypedSelector((state) => state.app.isAppLoading);
  const errorModal = useTypedSelector((state) => state.app.errorModal);
  const language = useTypedSelector((state) => state.app.language);
  I18n.locale = language;

  useEffect(() => {
    if (errorModal?.isActive) {
      Alert.alert('Error', errorModal.message);
    }
  }, [errorModal]);

  return (
    <>
      {props.children}
      <SpinnerStyled visible={isAppLoading} textContent={I18n.t('loading')} />
    </>
  );
}

export default AppContainer;
