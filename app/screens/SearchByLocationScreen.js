import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class SearchByLocation extends Component {
	
	constructor(props){
		super(props);

		this.state = {
			lat: 0,
			lng: 0
		}

		this.getCoordinates = this.getCoordinates.bind(this);
	}

	componentDidMount(){
		this.getCoordinates();
	}

	getCoordinates(){
		// console.log(' i was here');
		navigator.geolocation.getCurrentPosition(
				(currentposition) => { 
						this.setState({
							lat: currentposition.coords.latitude,
							lng: currentposition.coords.longitude
						});
						// console.log((currentposition));
				},
				(err) => {
					console.log(JSON.stringify(err))
					alert('Please make sure your device location settings are "ON" ');
				},
				{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
	}

	render() {
		return(
			<View>
				<Text>lat: { this.state.lat }</Text>
				<Text>lng: { this.state.lng }</Text>
				<Button
					title="Get Location"
					onPress= { () => this.getCoordinates}
				/>
			</View>
		);
	}
}

export default SearchByLocation;