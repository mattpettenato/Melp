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
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.buzbuz)
  }

  // componentDidUpdate(){
  //   this.MarkerManager.updateMarkers(this.props.buzbuz)
  // }

  useEffect(){
    this.MarkerManager.updateMarkers(this.props.buzbuz)
    this.MarkerManager.removeMarker()
  }

  render(){
    let coords = []
    // let oldQ=this.props.query
    for (let i = this.props.coordz.length -1; i >= 0 && this.props.coordz.length <= this.props.buzbuz.length; i--){
      coords.push(this.props.coordz[i])
    }
    if (this.props.buzbuz.length > 0 && coords.length > 0){
      for (let i = this.props.buzbuz.length -1; i >= 0 && coords.length < this.props.buzbuz.length; i--){
        if (this.props.buzbuz[i].categories.includes(this.props.query.toLowerCase()) || this.props.query === 'All' || this.props.query === 'all'){
          coords.push([this.props.buzbuz[i].id, this.props.buzbuz[i].latitude, this.props.buzbuz[i].longitude])
        }
      }
        var marker, i;
        // let dump = []
        for (i = 0; i < coords.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(coords[i][1], coords[i][2]),
            map: this.map,
            // animation: google.maps.Animation.DROP,
          });
          // console.log(this.map)
          // dump.push(coords[i])
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              window.location.href = `#/businesses/${coords[i][0]}`;
            }
          })(marker, i));
        }
    }
    // console.log(this.props)
    return (
    <div id="map-container" ref={map => this.mapNode = map}>
      Map
    </div>
    )
  }
}

export default ListingMap