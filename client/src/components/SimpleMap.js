import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div> {text} </div>

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 33.773289,
            lng: -84.365677
        },
        zoom: 11
    }
  render() {
    const API_KEY = process.env.REACT_APP_MAP_API_KEY
    return (
        <div style = {{ height: '50vh', width: '50$'}}>
        <GoogleMapReact
            apiKey={API_KEY}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        />
        <AnyReactComponent
        lat={33.773289}
        lng={-84.365677}
        />
        </div>
    )
  }
}

export default SimpleMap
