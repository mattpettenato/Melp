// /* global google:false */

// export default class MarkerManager {

//   constructor(map, handleClick) {
//     this.map = map;
//     this.handleClick = handleClick;
//     this.markers = {};
//   }

//   updateMarkers(businesses) {
//     const businessesObj = {};
//     businesses.forEach(business => businessesObj[business.id] = business);

//     businesses
//       .filter(business => !this.markers[business.id])
//       .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness, this.handleClick))

//     Object.keys(this.markers)
//       .filter(businessId => !businessesObj[businessId])
//       .forEach((businessId) => this.removeMarker(this.markers[businessId]))
//   }

//   createMarkerFromBusiness(business) {
//     const position = new google.maps.LatLng(business.lat, business.lng);
//     const marker = new google.maps.Marker({
//       position,
//       map: this.map,
//       businessId: business.id
//     });

//     marker.addListener('click', () => this.handleClick(business));
//     this.markers[marker.businessId] = marker;
//   }

//   removeMarker(marker) {
//     this.markers[marker.businessId].setMap(null);
//     delete this.markers[marker.businessId];
//   }
// }

// // export default MarkerManager;
// }
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    Object.keys(this.markers).forEach(markerKey => {
      this.markers[markerKey].setMap(null)
      delete this.markers[markerKey]
    })
    
    businesses.forEach(business => {
      if (!this.markers[business.id]) {
        let index = businesses.indexOf(business) + 1
        // this.createMarkerFromBusiness(business, index)
      }
    })
  }
   
  createMarkerFromBusiness(business, index) {
    const latLng = { lat: parseFloat(business.lat), lng: parseFloat(business.lng) }
    let marker = new google.maps.Marker({
      position: latLng,
      label: {text: index.toString(), color: 'white'},
      map: this.map
    })
    
    this.markers[business.id] = marker
    this.markers[business.id].setMap(this.map)

    const content = '<div id="map-info-container">' + 
                      '<div id="map-info-pic-container">' +
                        '<img id="map-info-pic" src=' +
                          business.photo_urls[0] +
                        '/>' + 
                        '<div id="map-info-title">' +
                          business.name +
                        '<div/>' + 
                        '<div id="map-info-category">' +
                          business.category +
                        '<div/>'
                      '<div/>'
                    '</div>'
  }
}
