import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import TopNews from './screens/TopNews';
import WeatherScreen from './screens/WeatherScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';
import JokeScreen from './screens/JokeScreen'
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';



export default class App extends React.Component {
  render() {
    return (
      <View>
   <AppContainer/>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen : HomeScreen,
  HoroscopeScreen : HoroscopeScreen,
  TopNews : TopNews,
  WeatherScreen : WeatherScreen,
  JokeScreen : JokeScreen
})

const AppContainer = createAppContainer(AppNavigator);