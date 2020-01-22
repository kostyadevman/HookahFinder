import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn}  from 'react-bootstrap-table'


class MyTable extends Component {
  render() {
    return (
        <div>
          <BootstrapTable data={ this.props.points }>
            <TableHeaderColumn dataField='pname'isKey>Point Name</TableHeaderColumn>
            <TableHeaderColumn dataField='coords'>Point Coord</TableHeaderColumn>
          </BootstrapTable>
        </div>
    );
  }
}

export default MyTable;
