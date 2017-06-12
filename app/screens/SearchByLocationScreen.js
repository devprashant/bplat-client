import React, { Component } from 'react';
import { 
	Text, 
	View, 
	Button, 
	TextInput, 
	StyleSheet,
	TouchableNativeFeedback,
	TouchableOpacity,
	ToastAndroid 
} from 'react-native';


class SearchByLocation extends Component {
	
	constructor(props){
		super(props);

		this.state = {
			lat: 0,
			lng: 0,
			coordAvailable: false,
			product: 'jalebi'
		}

		this.getCoordinates = this.getCoordinates.bind(this);
		this.sendToServer = this.sendToServer.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount(){
		this.getCoordinates(() => {});
				
	}

	// getCoordinates is a promise function
	getCoordinates(callback){
		// console.log(' i was here');
		var getCoordinatePromise =  new Promise(function(resolve, reject){
				navigator.geolocation.getCurrentPosition(
					(currentposition) => { 
							this.setState({
								lat: currentposition.coords.latitude,
								lng: currentposition.coords.longitude
							}, () => resolve(true)); // due to https://stackoverflow.com/a/30867563/3690154
							// console.log((currentposition));
							// resolve(true);
					},
					(err) => {
						
						return reject(err);
					},
					{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
				);	
			}.bind(this));

		getCoordinatePromise.then((statusBool) => {
								// if statusBool is true, coordinates are set
								if (statusBool) {
									console.log(this.state.lat);
									this.setState({
										coordAvailable: true
									}, () => callback());  // due to https://stackoverflow.com/a/30867563/3690154
									
								}
							})
							.catch((err) => {
								console.log(JSON.stringify(err))
								alert('Please make sure your device location settings are "ON" ');
							});		
	}

	handleSearch(){
		console.log("status: " + this.state.coordAvailable);
		if(this.state.coordAvailable){
			this.sendToServer();
			return
		}
		ToastAndroid.show('Let me get your Location', ToastAndroid.SHORT);
		this.getCoordinates(this.sendToServer);		
	}

	sendToServer(){
		ToastAndroid.show('Searching at Server', ToastAndroid.SHORT);
		var productSearchedFor = this.state.product;

		fetch("http://70.32.24.249/api/")
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
	}

	render() {
		return(
			<View style={styles.mainContainer}>
				<View style={styles.productInputCard}>
					<TextInput
						style={styles.productInput}
						placeholder="Product to search"
						onChangeText={(product) => this.setState({product})}
						value={this.state.product}
					/>					
				</View>				
				<TextInput multiline={true} editable={false} style={{ fontSize: 22, width: "80%", height: '15%', textAlign: 'center'}}>
					Enter the product to search and press the button
				</TextInput>
				<View style={styles.searchButtonContainer}>			
												
					<TouchableNativeFeedback
						onPress= { () => this.handleSearch()}
						background = {TouchableNativeFeedback.Ripple('rgb(25, 112, 127)', true)}														
					>
					<View style={styles.searchButtonView}>							
				        <Text style={{fontSize: 30, color: 'white'}}>Search</Text>
				    </View>
					</TouchableNativeFeedback>						
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	productInputCard: {
		// borderColor: 'red',
		// borderWidth: 3,
		margin: 11,
		marginTop: 40,
		elevation: 2,
		width: '80%',
		paddingHorizontal: 15
	},
	productInput: {

	},
	searchButtonContainer: {
		width: 150, 
		height: 150,
		borderRadius: 500,
		elevation: 8
	},
	searchButtonView: {
		width: 150, 
		height: 150, 
		backgroundColor: '#00BBDB', 
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 500,
	}
});

export default SearchByLocation;