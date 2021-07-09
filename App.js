import * as Font from 'expo-font';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-navigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading} />;
    } else {
      return (
        <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}

          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/asos-logo.png'),
        require('./assets/images/search.png'),
        require('./assets/images/bag.png'),
        require('./assets/images/favourite.png'),
        require('./assets/images/user.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        futura: require('./assets/fonts/futura.ttf'),
        'futura-light': require('./assets/fonts/FuturaPTLight.otf'),
        'futura-medium': require('./assets/fonts/FuturaPTMedium.otf'),
      }),
    ]);
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
