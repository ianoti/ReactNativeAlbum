import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './album-detail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = ({ albumList: [] });
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({ albumList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderAlbums() {
    return this.state.albumList.map(
      album => <AlbumDetail key={album.url} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
