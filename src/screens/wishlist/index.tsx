import React from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../containers/main-container';
import I18n from '../../I18n';

function WishListScreen() {
  return (
    <MainContainer leftIcon={true} title={I18n.t('wish_list').toUpperCase()}>
      <View>
        <Text>WishList Screen</Text>
      </View>
    </MainContainer>
  );
}

export default WishListScreen;
