// Index.ios.js - place code in here for IOS!!!


// Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create  a Component
const App = () => 
	(
		<View>
		<Header headerText={'Albums'} />
		<AlbumList />
		</View>
	);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
