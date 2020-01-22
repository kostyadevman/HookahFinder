import React, { Component } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";



const mapState = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const mapOption = {
    autoFitToViewport: 'always'
}

class MyMap extends Component {
  render() {
    return (
        <div>
            <YMaps>
            <Map defaultState={mapState} defaultOptions={mapOption} >
                {this.props.points.map(point => <Placemark geometry={point.coords} /> )}
            </Map>
          </YMaps>
        </div>
    );
  }
}

export default MyMap;
