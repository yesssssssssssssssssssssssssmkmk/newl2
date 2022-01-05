import * as React from 'react';
import { View , Text,StyleSheet} from 'react-native';
import SoundButton from '../components/SoundButton'
import AppHeader from '../components/AppHeader'


export default class Horoscope extends React.Component {
  render() {
    return (
      <View>
      <AppHeader/>
      <View style={styles.container}>
      
        <Text >Welcome to Horoscope Screen</Text>
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
