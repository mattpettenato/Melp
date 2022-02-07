import React from 'react';
import ReactDOM from 'react-dom';

class BusinessMap extends React.Component{

    constructor(props) {
        super(props)
    }

    componentDidMount() {
      // console.log(this.props.business.latitude)
        const mapOptions = {
            center: { lat: this.props.business.latitude, lng: this.props.business.longitude },
            zoom: 14
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const markerOptions = {
            position: { lat: this.props.business.latitude, lng: this.props.business.longitude },
            map: this.map
        }
        this.marker = new google.maps.Marker(markerOptions);
    }

    render() {
        return (
            <div className="location-map" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default BusinessMap;