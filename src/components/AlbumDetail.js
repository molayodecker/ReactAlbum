/*********************
    ALBUM DETAILS
*********************/

//Import the requisite libraries
import React from 'react';
import { Text, View } from 'react-native';
//Create a Component
const AlbumDetail = (props) => {
   return (
   		<View>
   		<Text>{props.album.title}</Text>
   		</View>
   	);
};


//Render Component
export default AlbumDetail;
