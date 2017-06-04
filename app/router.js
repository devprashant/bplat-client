import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import ResultDetailsScreen from './screens/ResultDetailsScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SearchByLocationScreen from './screens/SearchByLocationScreen';

const Router = StackNavigator({
	// Welcome: {
	// 	screen: WelcomeScreen,
	// 	navigationOptions: {
	// 		header: null
	// 	}		
	// },
	// SearchByLocation: {
	// 	screen: SearchByLocationScreen,
	// 	navigationOptions: {
	// 		header: null
	// 	}
	// },
	Home: {
		screen: HomeScreen,
		// headerLeft: null,
		navigationOptions: {
			title: 'Find Mee App',
			headerStyle: {
				backgroundColor: 'rgb(25, 112, 127)',				
			},
			headerTitleStyle: {
				color: 'white'
			}
		}
	},
	SearchResults: {
		screen: SearchResultsScreen,
		navigationOptions: {
			// title: 'Find Me App',
			headerStyle: {
				backgroundColor: 'rgb(25, 112, 127)',				
			},
			headerTitleStyle: {
				color: 'white'
			}
		}
	},
	ResultDetails: {
		screen : ResultDetailsScreen,
		navigationOptions: {
			// title: 'Find Me App',
			headerStyle: {
				backgroundColor: 'rgb(25, 112, 127)',				
			},
			headerTitleStyle: {
				color: 'white'
			}
		}
	}
});

export default Router;