import React from 'react';
import { useDispatch } from 'react-redux';
import GradientButton from '../../components/gradient-button';
import MainContainer from '../../containers/main-container';
import { useTypedSelector } from '../../hooks';
import { logout } from '../../redux/customer/actions';
import I18n from '../../I18n';
import { CardTitleUser, CardUser } from './style';
function SettingScreen() {
  const user = useTypedSelector((state) => state.customer.user);
  const dispatch = useDispatch();
  return (
    <MainContainer leftIcon={true} title={I18n.t('settings').toUpperCase()}>
      <CardUser>
        <CardTitleUser>{user.name}</CardTitleUser>
        <CardTitleUser>{user.last_name}</CardTitleUser>
        <CardTitleUser>{user.email}</CardTitleUser>
        <GradientButton
          submit={() => dispatch(logout())}
          buttonText={I18n.t('log_out')}
        />
      </CardUser>
    </MainContainer>
  );
}

export default SettingScreen;
