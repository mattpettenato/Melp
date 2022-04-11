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

  }

  componentDidUpdate(){
    // this.MarkerManager.updateMarkers(this.props.listings)
  }

  render(){
    let coords = []
    if (this.props.businesses.length > 0){
      // console.log(this.props)

      for (let i = this.props.businesses.length -1; i >= 0 && coords.length < this.props.businesses.length; i--){
        // console.log(this.props.businesses[i].id)
        if (this.props.businesses[i].categories.includes(this.props.query) || this.props.query === 'All' || this.props.query === 'all'){
          coords.push([this.props.businesses[i].id, this.props.businesses[i].latitude, this.props.businesses[i].longitude])
        }
      }

      // if (this.props.businesses.length === coords.length) {

        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < coords.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(coords[i][1], coords[i][2]),
            map: this.map,
            animation: google.maps.Animation.DROP,
          });
          
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              // infowindow.setContent(coords[i][0]);
              // infowindow.open(this.map, marker);
              window.location.href = `#/businesses/${coords[i][0]}`;
            }
          })(marker, i));
        }
      // }
    }
    return (
    <div id="map-container" ref={map => this.mapNode = map}>
      Map
    </div>
    )
  }
}

export default ListingMap