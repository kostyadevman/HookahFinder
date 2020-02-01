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
            <YMaps>
            <Map defaultState={mapState}  width='100%' height='100%'
                options={{
                    autoFitToViewport: 'always'
                    }}>
                {this.props.points.map(point => <Placemark geometry={point.coords} /> )}
            </Map>
          </YMaps>
    );
  }
}

export default MyMap;
