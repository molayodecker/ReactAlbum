/*********************
    ALBUM DETAILS
*********************/

//Import the requisite libraries
import React from 'react';
import { Text, View , Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
//Create a Component
const AlbumDetail = ({album}) => {

const { title, artist, thumbnail_image, image, url } = album;
const { thumbnailContainerStyle, headerContentStyle, thumbnailStyle, headerTextStyle, ImageStyle } = styles;

   return ( 
   		<Card>
   			<CardSection>
   			<View style ={thumbnailContainerStyle}>
   			<Image 
   			style={thumbnailStyle}
   			source={{uri: thumbnail_image}}
   			 />
   			</View>
   			 <View style={headerContentStyle}>
   		     <Text style={headerTextStyle}>{ title }</Text>
   		     <Text>{ artist }</Text>
   		    </View>
   			</CardSection>
   			<CardSection>
   			<Image 
   			style={ImageStyle}
   			source={{uri: image}} 
   			/>
   			</CardSection> 
   			<CardSection>
   			<Button onPress={() => Linking.openURL(url)} />
   			</CardSection>
   		</Card>
   	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},

	thumbnailStyle: {
		width: 50,
		height: 50
	},
	thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
	marginRight: 10 
	},
	ImageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};


//Render Component
export default AlbumDetail;
