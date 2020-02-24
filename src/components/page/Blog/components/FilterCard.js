import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';

import { getBlogFilters } from 'api/filters';
import { FilterCard as FilterCmp } from 'components';

@observer
class FilterCard extends Component {
    @observable filters = [];

    static propTypes = {
      handleApplyFilter: PropTypes.func.isRequired
    };

    componentDidMount() {
      const self = this;
      getBlogFilters().then(function (response) {
        self.filters = response.data;
      });
    }

    @computed get filterObject() {
      const res = this.filters.filter(filter => filter.checked).map(filter => {
        const tpl = {};
        tpl[filter.name] = true;
        return tpl;
      });

      return res;
    }

    onApplyFilter = () => {
      this.props.handleApplyFilter(this.filterObject);
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
              <input
                type='checkbox'
                checked={filter.checked || false}
                onChange={(e) => { filter.checked = e.target.checked; }}
              />
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
