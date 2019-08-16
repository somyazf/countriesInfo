import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
class Map extends Component {

  constructor(props){
    super(props);
    this.state={
      center: {
        lat: this.props.lat,
        lng: this.props.long
      },
      zoom: 6
    }
  }
  render() {
    const {center,zoom} = this.state;
    return (
      <div style={{ height:'100%',width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBCt1HwhcjRuCfB7USS_Z8sN-RWnPfJuv8' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }

}
export {Map}