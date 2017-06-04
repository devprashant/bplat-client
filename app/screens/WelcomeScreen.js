/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  
  Text,
  View    
} from 'react-native';

class WelcomeScreen extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    setTimeout(this.props.navigation.navigate('Home',{}), 3000); 
  }

  render(){
    return (
      <View  
        style={{ 
          borderWidth: 3, 
          flex:1,
          // resizeMode:'stretch',
          justifyContent: 'space-around',
          //  alignItems: 'center'
         }}>        
      <Text style={{ 
              // borderColor: 'red',
              // borderWidth: 3, 
              color: 'skyblue', 
              fontWeight: 'bold', 
              fontSize: 130
          }}>hi</Text>
      {/*<Text style={{
          // borderColor: 'red',
          // borderWidth: 3,
          color: 'skyblue',
          fontSize: 40,
          textAlign:'center'
      }}>হাই</Text>*/}
      <Text style={{
          // borderColor: 'red',
          // borderWidth: 3,
          color: 'skyblue',
          fontSize: 130,
          textAlign:'right'
      }}> नमस्ते</Text>
      </View>
    );
  } 
}

export default WelcomeScreen;