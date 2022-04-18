import React from "react";
import MarkerManager from "../../util/marker_manager";

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
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses)
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.businesses)
  }

  render(){
    console.log(this.props)
    let coords = []
    let oldQ=this.props.query
    console.log(oldQ)
    for (let i = this.props.coordz.length -1; i >= 0 && this.props.coordz.length <= this.props.businesses.length; i--){
      // console.log(this.props)
      coords.push(this.props.coordz[i])
      // this.state.markers.push(this.props.coordz[i])
      // console.log('pushed')
      // console.log(this.props.coordz[i])

    }
    
    console.log(this.coords)

    // let coords = this.props.coordz
    if (this.props.businesses.length > 0 && coords.length > 0){
      for (let i = this.props.businesses.length -1; i >= 0 && coords.length < this.props.businesses.length; i--){
        if (this.props.businesses[i].categories.includes(this.props.query.toLowerCase()) || this.props.query === 'All' || this.props.query === 'all'){
          coords.push([this.props.businesses[i].id, this.props.businesses[i].latitude, this.props.businesses[i].longitude])
        }
      }
        var marker, i;
        let dump = []
        for (i = 0; i < coords.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(coords[i][1], coords[i][2]),
            map: this.map,
            // animation: google.maps.Animation.DROP,
          });
          dump.push(coords[i])
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              window.location.href = `#/businesses/${coords[i][0]}`;
            }
          })(marker, i));
        }
    }
    return (
    <div id="map-container" ref={map => this.mapNode = map}>
      Map
    </div>
    )
  }
}

export default ListingMap