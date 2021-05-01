import React from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../containers/main-container';
import I18n from '../../I18n';

function RentalsScreen() {
  return (
    <MainContainer leftIcon={true} title={I18n.t('rentals').toUpperCase()}>
      <View>
        <Text>Rentals Screen</Text>
      </View>
    </MainContainer>
  );
}

export default RentalsScreen;
