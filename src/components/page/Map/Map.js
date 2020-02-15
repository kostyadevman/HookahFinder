import React, { Component } from 'react';
import MyMap from '../../MyMap';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import MyTable from '../../MyTable';

const points = [
  { pname: 'point_1', coords: [54.7, 39.99] },
  { pname: 'point_2', coords: [54.8, 39.7] },
  { pname: 'point_3', coords: [54.9, 39.6] },
  { pname: 'point_4', coords: [55.5, 40.9] },
  { pname: 'point_4', coords: [55.5, 40.9] }
];

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SplitterLayout
        percentage
        primaryMinSize={25}
        secondaryInitialSize={70}
      >
        <div>
          <MyTable points={points} />
        </div>
        <div className='map'>
          <MyMap points={points} />
        </div>
      </SplitterLayout>

    );
  }
}

export default Map;
