
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

class ResultDetailsScreen extends Component {

  static navigationOptions = ({navigation }) => ({
    title: "Visit " + navigation.state.params.bizProfileObj.name 
  });

	constructor(props){
		super(props);

		this.state= {
			bizProfile:{				
				name: ' ',
				city: ' ',
				area: ' ',
				category: [],
        products: [],
        coordinates: {
          lat: 30.829479, 
          lng: 76.932124
        }
      }
      // categorySearchedFor: ' ',
		}
	}

	componentWillMount(){
		console.log("-----------------from details screen/////");
		// console.log(JSON.stringify(this.props.navigation.state.params));
		
		this.setState({ 'bizProfile' : this.props.navigation.state.params.bizProfileObj });
    console.log(this.props.navigation.state.params.bizProfileObj.coordinates.lat);
		
  		console.log("-----------------/////from details screen");
	}

	componentDidMount(){
		// var allCategories = this.state.bizProfile.category;
  // 		console.log("all cat");
  // 		console.log(this.state.bizProfile.category);
  // 		var productRows = [];
  // 		var i =0;
  // 		for(var catg in allCategories){
  //      			productRows.push(<Text key={i++}>Category-- {catg}</Text>);
  //      			allCategories[catg].map((products) => productRows.push(<Text key={i++}>-------- {products}</Text>));
  //      			console.log('product cat');
  //    			console.log(allCategories[catg]); 			
		// }

		// this.setState({productRows});


	}

  render() {
    // return (
      // <ScrollView>
      // 	<Text>Name of Business</Text>
      // 	<Text>{this.state.bizProfile.name}</Text>
      // 	<Text>Category</Text>
      // 	{ this.state.productRows }
      	
      // 	<Text>Products</Text>
      	
      // </ScrollView>);
      console.log("from render================");
      console.log(this.state.bizProfile);

      	var allProducts = this.state.bizProfile.products;
        // console.log(this.state.categorySearchedFor);
      	var productTagRows = [];
      	var i=0;
        // console.log(allCategories);

      	allProducts.map((productTags) => productTagRows.push(<Text key={i++} style={styles.tags}>{productTags}</Text>)); 

        // var allSubCategories = Object.keys(this.state.bizProfile.category); // its an array of subdocument keys. 
        console.log('lat:' + this.state.bizProfile.coordinates.lat + 'lng:' + this.state.bizProfile.coordinates.lng );        

	return(
		<ScrollView style={styles.container}>
        <View style={styles.mapContainer}>            
            <MapView
              style={styles.map}
              region={{
                latitude: this.state.bizProfile.coordinates.lat,
                longitude: this.state.bizProfile.coordinates.lng,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021
              }}              
            >

              <MapView.Marker 
                coordinate={{
                  latitude: this.state.bizProfile.coordinates.lat,
                  longitude: this.state.bizProfile.coordinates.lng
                }}                
                title={this.state.name}
                description={this.state.area + ',' + this.state.city}
              >

              </MapView.Marker>
              
            </MapView>
          </View>
        <View style={styles.headerCard}>
          <View style={styles.tagContainer}>
            {productTagRows}
          </View>
         	<View style={styles.bizProfileHeader}>        		
          		<Text style={styles.bizName}>{this.state.bizProfile.name}</Text>
        	</View>	      		      	
        </View>         
    </ScrollView>
	);
  }
}

const styles = StyleSheet.create({
 container: {
  // borderWidth: 3,
  // borderColor: 'red'
 },
 headerCard: {
  // borderWidth: 3,
  // borderColor: 'green'
 },
 bizProfileHeader: {
  // borderWidth: 3,
  // borderColor: 'magenta',
  height: 190,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey',
  margin: 4,
  // borderRadius: 50
  // elevation:20
 },
 bizName: {
  fontSize: 30,
  color: 'white'
 },
 tagContainer: {
  // borderWidth: 3,
  // borderColor: 'mediumspringgreen',
  flexDirection: 'row',
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  flexWrap: 'wrap',
  margin: 11
 },
 tags: {
  fontSize: 16,
  fontWeight: 'bold',
  backgroundColor: 'skyblue',
  borderRadius: 5,
  margin: 5,
  padding:5
 },
 mapContainer: {
 	// height: 700,
 	// backgroundColor: 'grey',
 	// flexDirection: 'column',
 	// justifyContent: 'center',
 	// alignItems: 'center'

 },
 map: {
 	height: 270
 }
});

export default ResultDetailsScreen;