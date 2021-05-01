import React from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../containers/main-container';

import I18n from '../../I18n';

function NewBookScreen() {
  return (
    <MainContainer leftIcon={true} title={I18n.t('new_book').toUpperCase()}>
      <View>
        <Text>New Book Screen</Text>
      </View>
    </MainContainer>
  );
}

export default NewBookScreen;
