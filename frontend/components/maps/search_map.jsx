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
    // const markerOptions = {
    // position: { lat: this.props.business.latitude, lng: this.props.business.longitude },
    // map: this.map
    // }
    // this.marker = new google.maps.Marker(markerOptions);
  }

  componentDidUpdate(){
    // this.MarkerManager.updateMarkers(this.props.listings)
  }

  render(){
    let coords = []
    if (this.props.businesses.length > 0){
      console.log(this.props)
      this.props.businesses.map

    for (let i = this.props.businesses.length -1; i >= 0 && coords.length < this.props.businesses.length; i--){
      coords.push([this.props.businesses[i].name.charAt(0), this.props.businesses[i].latitude, this.props.businesses[i].longitude])
      console.log(coords)
    }


    }
    // this.props.businesses

    return (

    <div id="map-container" ref={map => this.mapNode = map}>
      Map
    </div>
    )
  }
}

export default ListingMap