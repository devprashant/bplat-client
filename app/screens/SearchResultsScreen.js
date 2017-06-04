
import React, { Component } from 'react';
import { ScrollView, ListView, View,TouchableHighlight,  Text, StyleSheet } from 'react-native';

class SearchResultsScreen extends Component {
	static navigationOptions = ({navigation }) => ({
		title: navigation.state.params.productSearchedFor.charAt(0).toUpperCase() +
			   navigation.state.params.productSearchedFor.slice(1) + " is available at"
	});

	constructor(props){
		super(props);
		this.handlePress = this.handlePress.bind(this);

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.state = {
			dataSource: ds.cloneWithRows([' ']),
			productSearchedFor: ' '
		}
	}

	componentDidMount(){
		this.setState( { 
			dataSource: this.state.dataSource.cloneWithRows(this.props.navigation.state.params.resultObjArray),
			// product: this.state.product(this.props.navigation.state.params.productSearchedFor)
		});
		console.log(this.props.navigation.state.params);
	}

	handlePress(bizProfileObj){
		// console.log("-----------------");
		// console.log("from handle press ");
		// console.log(resultDetailsObj);
		// console.log("-----------------");			 
		
			this.props.navigation.navigate('ResultDetails', { bizProfileObj});
	}

  render() {
  	
    return (
      	<ScrollView>
      		 <ListView  style={{ marginTop: 7}}    		 	
      			dataSource={this.state.dataSource}
      			renderRow={(rowData) => (
      						<TouchableHighlight button onPress={() => this.handlePress(rowData)}>
      							<View style={styles.viewListContainer}>
      								<View style={styles.viewListHolder}>
		      							<Text style={styles.bizName}>{rowData.name}</Text>		      							
		      							<View style={styles.viewListFooter}>
		      								<Text style={styles.bizArea}>{rowData.area}</Text>
		      								<Text style={styles.bizTimings}>Timing: 9:00 am - 8:00 pm </Text>
		      							</View>		      							
      								</View>
      							</View>
      						</TouchableHighlight>
      					   )}
      		/>
      	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	viewListContainer: {
		// borderColor: 'red',
		// borderBottomWidth: 1,
		backgroundColor: 'white',
		// borderRadius: 7,
		margin: 3,
		marginLeft: 5,
		marginRight: 5,
		flexDirection: 'column',

		borderRadius:2,		
		elevation: 2,
		// height: 70
	},
	viewListHolder: {		
		borderLeftColor: 'green',
		borderLeftWidth: 5,
		// borderRadius: 5
		height: 70
	},
	bizName: {		
		marginLeft: 15,
		textAlign: 'left',
		fontSize: 21,
		// marginTop: 2		
	},
	viewListFooter: {
		flexDirection: 'row',		
		marginLeft: 15,
		marginTop: 5
	},
	bizArea: {		
		textAlign: 'left'	
	},
	bizTimings: {
		alignItems: 'flex-end'
	}
});

export default SearchResultsScreen;