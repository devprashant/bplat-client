
import React, { Component } from 'react';
import { View, Text, TextInput, Button, ToastAndroid, StyleSheet } from 'react-native';
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class HomeScreen extends Component {

	// static navigationOptions = {
	// 	title: 'Find me'
	// }

	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this);

		this.state = { 
			city: 'panipat',
			area: 'tehsil camp',
			product: 'jalebi',
      searchClicked: false
		};
	}

	handleSearch(){
		
    if(this.state.searchClicked) return;
    
    // this.setState({searchClicked: !this.state.searchClicked});

		var productSearchedFor = this.state.product.toLowerCase();

    var searchObj = {
			city: this.state.city.toLowerCase(),
			area: this.state.area.toLowerCase(),
			product: this.state.product.toLowerCase()
		};    

    var formBody = [];
    for (var property in searchObj) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(searchObj[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    console.log("Sending request");
    fetch("http://70.32.24.249/api/search", {
      method: 'post',  
          headers: {  
            'Accept': 'application/json',
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
          },
          body: formBody  
    })
    .then((response) => response.json())
    .then(resultObjArray => {
            //check if response is empty ,meaning no match found
            // console.log(typeof resultObjArray); // object
            // this.setState({searchClicked: !this.state.searchClicked});
            console.log(resultObjArray);
            if(!resultObjArray.length) return ToastAndroid.show("Not registered in your area yet", ToastAndroid.LONG);
            ToastAndroid.show('Showing Results', ToastAndroid.SHORT);
            this.props.navigation.navigate('SearchResults', {resultObjArray, productSearchedFor});

    })
    .catch(err => {
      // this.setState({searchClicked: !this.state.searchClicked});
      console.log(err);
      ToastAndroid.show("Please Retry", ToastAndroid.SHORT);
    });

    // var apiURL = 'http://192.168.43.33:8080/bplat/data/data.json';
    // fetch(apiURL)
    //     .then((response) => response.json())
    //     .then((resultObjArray) => {
    //       // console.log(resultObjArray);
    //        ToastAndroid.show('Showing Results', ToastAndroid.SHORT);
    //         this.props.navigation.navigate('SearchResults', { resultObjArray, 
    //                                                           categorySearchedFor: Object.keys(resultObjArray[0].category)[0] });      
    //     })
    //     .catch((err) =>  {
    //       ToastAndroid.show('No network connection.Please retry', ToastAndroid.SHORT);
    //       console.log(err.message)
    //     });	

	}

  componentDidMount(){
    codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
  }

  render() {

    
    return (
      <View style={styles.topContainer}>
        <View style={styles.inputContainer}>          
        	{/*<Text>Enter City</Text>*/}
        	<TextInput
        		onChangeText={(city) => this.setState({city})}
        		value={this.state.city}
            placeholder="Enter City"          
        	/>
        	{/*<Text>Enter area</Text>*/}
        	<TextInput 
        		onChangeText={(area) =>  this.setState({area})}
        		value={this.state.area}
            placeholder="Enter area"
        	/>
        	{/*<Text> Enter Product</Text>*/}
        	<TextInput
        		onChangeText={(product) => this.setState({product})}
        		value={this.state.product}
            placeholder="Enter Product"
        	/>
        </View>
        <View style={styles.buttonContainer}>            
        	<Button
        		onPress={this.handleSearch}
        		title="Search"
        		color="#00BBDB"
        	/>
        </View>
      </View>
    );
  }
}

HomeScreen = codePush(codePushOptions)(HomeScreen);

const styles = StyleSheet.create({
  topContainer: {
    margin: 5,        
  },
  inputContainer: {
    borderRadius: 2,
    margin: 5,
    backgroundColor: 'white',
    elevation: 2
  },
  buttonContainer: {
    borderRadius: 2,
    margin: 5,
    elevation: 2
  }
});

export default HomeScreen;