import React, { Component } from 'react';
import MyMap from '../MyMap/MyMap'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import MyTable from '../MyTable/MyTable';


const points = [
          { pname: 'point_1', coords: [54.7, 39.99] },
          { pname: 'point_2', coords: [54.8, 39.7] },
          { pname: 'point_3', coords: [54.9, 39.6] },
          { pname: 'point_4', coords: [55.5, 40.9] }
        ]

class Home extends Component {
  render() {
    return (
      <SplitterLayout>
        <div>
            <MyTable points={points}></MyTable>
        </div>
        <div className='map'>
            <MyMap points={points}></MyMap>
        </div>
      </SplitterLayout>

    );
  }
}

export default Home;
