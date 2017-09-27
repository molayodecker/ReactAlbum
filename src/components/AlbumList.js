// This is the album list for the Album App

//Import the requisite libraries
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Create the Component
class AlbumList extends Component {
//class state
state = { albums: [] };


componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({ albums: response.data }));
} 

renderAlbum() {
	return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
}

render() {
    console.log(this.state);	
	return (
         <View>
         {this.renderAlbum()}
         </View>
	);
  }
}

//Display or render Component
export default AlbumList;
