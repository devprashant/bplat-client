/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import React, { Component } from 'react';
// import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import bplat from './app/router';

// class bplat extends Component {

// 	constructor(props){
// 		super(props);

// 		this._onPressButton = this._onPressButton.bind(this);
// 	}

// 	_onPressButton(){
// 		console.log('pressed');
// 	}

// 	render(){
// 		return (
//     <ScrollView style={styles.container}>
//         <View style={styles.headerCard}>
//          	<View style={styles.bizProfileHeader}>        		
//           		<Text style={styles.bizName}>ram sweets</Text>
//         	</View>
// 	      	<View style={styles.tagContainer}>
// 		        <Text style={styles.tags}>samosa</Text>
// 		        <Text style={styles.tags}>ras gullla</Text>
// 		        <Text style={styles.tags}>gulab jamun</Text>
// 		        <Text style={styles.tags}>jalebi</Text>
// 		        <Text style={styles.tags}>gol gappe</Text>
// 		        <Text style={styles.tags}>mathri</Text>
// 		        <Text style={styles.tags}>rajbhog</Text>
//             <Text style={styles.tags}>gulab jamun</Text>
//             <Text style={styles.tags}>jalebi</Text>
//             <Text style={styles.tags}>gol gappe</Text>
// 	      	</View>
// 	      	<View style={styles.mapContainer}>
// 	      		<Text style={styles.map}>Map will appear here</Text>	      		
// 	      	</View>
//         </View>         
//     </ScrollView>
//     )}
// }

// const styles = StyleSheet.create({
//  container: {
//   // borderWidth: 3,
//   // borderColor: 'red'
//  },
//  headerCard: {
//   // borderWidth: 3,
//   // borderColor: 'green'
//  },
//  bizProfileHeader: {
//   // borderWidth: 3,
//   // borderColor: 'magenta',
//   height: 190,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'grey',
//   margin: 4,
//   // borderRadius: 50
//  },
//  bizName: {
//   fontSize: 30,
//   color: 'white'
//  },
//  tagContainer: {
//   // borderWidth: 3,
//   // borderColor: 'mediumspringgreen',
//   flexDirection: 'row',
//   justifyContent: 'flex-start',
//   // alignItems: 'center',
//   flexWrap: 'wrap',
//   marginTop: 11
//  },
//  tags: {
//   fontSize: 16,
//   fontWeight: 'bold',
//   backgroundColor: 'skyblue',
//   borderRadius: 5,
//   margin: 5,
//   padding:5
//  },
//  mapContainer: {
//  	height: 700,
//  	backgroundColor: 'grey',
//  	flexDirection: 'column',
//  	justifyContent: 'center',
//  	alignItems: 'center'
//  },
//  map: {
//  	fontSize: 30,
//  	fontWeight: 'bold',
//  	color: 'white'
//  }
// });

AppRegistry.registerComponent('bplat', () => bplat);