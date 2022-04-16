import React from "react";

class ListingMap extends React.Component{
  constructor(props){
    super(props)
    this.state= {markers: this.props.markers};
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
    // window.location.reload();

  }

  render(){
    // console.log(this.props.query)
    let coords = []
    let oldQ=this.props.query
    console.log(oldQ)
    for (let i = this.props.coordz.length -1; i >= 0 && this.props.coordz.length < this.props.businesses.length; i--){
      // console.log(this.props)
      coords.push(this.props.coordz[i])
      // console.log('pushed')
      // console.log(this.props.coordz[i])

    }
    

    // let coords = this.props.coordz
    if (this.props.businesses.length > 0 && coords.length > 0){
      // window.location.reload
      // console.log(this.props.coordz)


      for (let i = this.props.businesses.length -1; i >= 0 && coords.length < this.props.businesses.length; i--){

        if (this.props.businesses[i].categories.includes(this.props.query) || this.props.query === 'All' || this.props.query === 'all'){
          coords.push([this.props.businesses[i].id, this.props.businesses[i].latitude, this.props.businesses[i].longitude])
        }
      }

      // if (this.props.businesses.length === coords.length) {

        // var infowindow = new google.maps.InfoWindow();
        var marker, i;
        let dump = []
        for (i = 0; i < coords.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(coords[i][1], coords[i][2]),
            map: this.map,
            // animation: google.maps.Animation.DROP,
          });
          dump.push(coords[i])
          // console.log(coords)
          // console.log(dump)

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              // infowindow.setContent(this.props.coordz[i][0]);
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