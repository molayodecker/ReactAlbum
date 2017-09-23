//Header 

//Import a the required libraries to make a component
import React from 'react';
import { Text } from 'react-native';

//Create a Component
const Header = () => {
	const { textStyle } = styles;
	return <Text style={textStyle} > Albums! </Text>;
};

const styles = {
	textStyle: {
		fontSize: 20
	}
};

//Make Component available to other parts of the App
export default Header;
