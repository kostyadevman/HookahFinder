import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import PropTypes from 'prop-types';

import { getHookahFilters } from 'api/filters';
import { FilterCard as FilterCmp } from 'components';

@withTranslation()
@observer
class FilterCard extends Component {
    @observable filters = [];

    static propTypes = {
      t: PropTypes.func
    };

    componentDidMount() {
      const self = this;
      getHookahFilters().then(function (response) {
        self.filters = response.data;
      });
    }

    onApplyFilter = () => {
    }

    renderFilterSearch = () => {
      return (
        <input className='input-search my-4 mb-5' type='search' />
      );
    }

    renderFilters = () => {
      return (
        this.filters.map((filter, i) => (
          <label
            key={i}
            className={`cb-container mb-2 ${i !== 0 ? 'my-2' : ''}`}
          >
            {filter.title}
            <input type='checkbox' checked={filter.checked} />
            <span className='checkmark' />
          </label>
        ))
      );
    }

    renderPriceRange = () => {
      const { t } = this.props;
      return (
        <div className='price-controls d-flex justify-content-between align-items-end mt-2'>
          <span className='mb-2 mr-2'>{t('Filter.From')}</span>
          <input className='input-search flex-grow-1' type='number' value='' />
          <span className='m-2'>{t('Filter.To')}</span>
          <input className='input-search flex-grow-1' type='number' value='' />
        </div>
      );
    }

    renderMainContent = () => {
      return (
        <>
          {this.renderFilterSearch()}
          {this.renderFilters()}
          {this.renderPriceRange()}
        </>
      );
    }

    render() {
      return (
        <FilterCmp mainContent={this.renderMainContent()} handleApplyFilter={this.onApplyFilter} />
      );
    }
}
export default FilterCard;
