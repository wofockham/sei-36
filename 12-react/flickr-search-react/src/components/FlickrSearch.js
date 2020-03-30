import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Gallery from './Gallery';

import jsonp from 'jsonp-es6'; // for homework: use axios

class FlickrSearch extends Component {
  constructor() {
    super();
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q) {
    console.log('Searching Flickr for', q);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
      text: q,
      format: 'json'
    };

    // For homework: use axios.
    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'}).then((results) => {
      console.log( results );
    });
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={ this.fetchImages } />
        <Gallery />
      </div>
    );
  }
}

export default FlickrSearch;
