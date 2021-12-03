import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 8
};

class BusinessMap extends React.Component {
  //...

  componentDidMount() {
    let mapOptions;

    // set the map to show SF
    mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 11.5
    };
    

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return <div id="map-container" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default withRouter(BusinessMap);