import React from 'react';
import {StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import {ProfileScreen } from './ProfileScreen';
import {GenreScreen} from './GenreScreen';
import {PickSongScreen} from './PickSongScreen';
import { LearnScreen} from './LearnScreen';
import {PerformScreen} from './PerformScreen';
import {FeedbackScreen} from './FeedbackScreen';
import { ReviewScreen } from './ReviewScreen';
import { PracticeScreen } from './PracticeScreen';

const AppNavigator = StackNavigator({
	Home: {
		screen: LoginScreen,
	},

	Profile:{
		screen: ProfileScreen
	},

	Genre: {
		screen: GenreScreen
	},

	PickSong:{
		screen: PickSongScreen
	},

	Learn:{
		screen: LearnScreen
	},

	Perform:{
		screen: PerformScreen
	},

	Feedback:{
		screen: FeedbackScreen
	},

	Review:{
		screen: ReviewScreen
	},

	Practice:{
		screen: PracticeScreen
	}

});

export default class App extends React.Component { 
	
	constructor(props) {
		super(props);   
 
	}
	

	render() {    
		return <AppNavigator />;
	}
}


