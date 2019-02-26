import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div> {text} </div>

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }
  render() {
    const API_KEY = process.env.REACT_APP_MAP_API_KEY
    return (
        <div style = {{ height: '100vh', width: '100$'}}>
        <GoogleMapReact
            apiKey={API_KEY}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        />
        <AnyReactComponent
        lat={159.955413}
        lng={30.337844}
        text={"Road Warrior Map"}
        />
        </div>
    )
  }
}

export default SimpleMap
