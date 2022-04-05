import React from "react";
// import MarkerManager from "../../util/marker_manager";

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});



class ListingMap extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    const mapOptions = {
      center: {
        lat: 37.76,
        lng: -122.439997
      },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate(){
    // this.MarkerManager.updateMarkers(this.props.listings)
  }

  render(){
    return (

    <div id="map-container" ref={map => this.mapNode = map}>
      Map
    </div>
    )
  }
}

export default ListingMap