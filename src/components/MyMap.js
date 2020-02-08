import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
  controls: ['zoomControl', 'fullscreenControl']
};

class MyMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <YMaps
        query={{
          ns: 'use-load-option',
          load:
      'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
        }}
      >
        <Map
          width='100%' height='100%' defaultState={mapData}
          options={
            { autoFitToViewport: 'always' }
          }
        >
          {this.props.points.map(point => <Placemark geometry={point.coords} />)}
        </Map>
      </YMaps>

    );
  }
}

export default MyMap;
