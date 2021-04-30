import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import AppContainer from './src/containers/app-container';
import AppNavigation from './src/navigation';
import configureStore from './src/redux/store';
import theme from './src/theme';
import { navigationRef } from './src/utils/root-navigation';

function App() {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <AppContainer>
              <AppNavigation />
            </AppContainer>
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

