import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';
import SoundButton from '../components/SoundButton';

export default class HomeScreen extends React.Component {

  goToJokeScreen=(JokeScreenColor)=> {
      this.props.navigation.navigate('JokeScreen',{color:JokeScreenColor})
    } 
     likePressed(){
  var like=db.ref('Rating/'+'/');
  like.update({
   'likePressed' : 1
  });
}

dislikePressed(){
  var dislike=db.ref('Rating'+'/')
  dislike.update({
    'dislikePressed' : 1
  });
}
  render(){
    

  
    return(
      <View>
      <View>
        <AppHeader/>
        
<TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>this.props.navigation.navigate('JokeScreen')}>
            <Text style={styles.buttonText}>Read A Joke</Text>
          </TouchableOpacity>

<TouchableOpacity 
            style={[styles.button,{backgroundColor:"black"}]} 
            onPress={()=>this.props.navigation.navigate('HoroscopeScreen')}>
            <Text style={styles.buttonText}>Horoscope</Text>
          </TouchableOpacity>

<TouchableOpacity
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.props.navigation.navigate('WeatherScreen')}>
            <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button,{backgroundColor:"green"}]} 
            onPress={()=>this.props.navigation.navigate('TopNews')}>
            <Text style={styles.buttonText}>TopNews</Text>
          </TouchableOpacity>


          </View>
<View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:8}}>Rate us</Text>

<TouchableOpacity onPress ={this.likePressed}>
 <Image 
 style={{
  width: 50,
  height: 50, 
  marginTop: 20,
  marginLeft: 25, }} 
 source={require('../assets/thumbsup.png')}
 /> 
</TouchableOpacity>

<TouchableOpacity onPressed = {this.dislikePressed}> 
<Image style={{
 width: 50,
 height: 50, 
 marginTop: -35,
 marginLeft: 125, }} 
  source={require('../assets/thumbsdown.png')} />
   </TouchableOpacity>

</View>
</View>
  
    );
  }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 250,
    height:40,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
})



