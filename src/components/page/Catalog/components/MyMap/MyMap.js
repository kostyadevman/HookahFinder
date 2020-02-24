import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './style.css';
import PropTypes from 'prop-types';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
  controls: ['zoomControl', 'fullscreenControl']
};

class MyMap extends Component {
  static propTypes = {
    hookahs: PropTypes.array
  }

  render() {
    return (

      <YMaps
        query={{
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
        }}
      >
        <Map
          width='100%' height='500px' defaultState={mapData}
          options={
            { autoFitToViewport: 'always' }
          }
        >
          {this.props.hookahs.map(point => {
            return (
              <Placemark
                key={point.id}
                geometry={point.coords}
                properties={{ iconContent: point.name }}
              />
            );
          })}
        </Map>
      </YMaps>

    );
  }
}

export default MyMap;
