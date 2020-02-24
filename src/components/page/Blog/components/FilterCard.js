import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { getBlogFilters } from 'api/filters';
import { FilterCard as FilterCmp } from 'components';

@observer
class FilterCard extends Component {
    @observable filters = [];

    componentDidMount() {
      const self = this;
      getBlogFilters().then(function (response) {
        self.filters = response.data;
      });
    }

    onApplyFilter = () => {
    }

    renderFilters = () => {
      return (
        <>
          {this.filters.map((filter, i) => (
            <label
              key={i}
              className={`cb-container mb-2 ${i !== 0 ? 'my-2' : ''}`}
            >
              {filter.title}
              <input type='checkbox' checked={filter.checked} />
              <span className='checkmark' />
            </label>
          ))}
        </>
      );
    }

    render() {
      return (
        <FilterCmp mainContent={this.renderFilters()} handleApplyFilter={this.onApplyFilter} />
      );
    }
}
export default FilterCard;
