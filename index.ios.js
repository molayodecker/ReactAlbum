// Index.ios.js - place code in here for IOS!!!


// Import library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create  a Component
const App = () => (<Header />);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
