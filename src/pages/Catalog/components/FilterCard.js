import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import PropTypes from 'prop-types';

import { getHookahFilters } from 'api/filters';
import { FilterCard as FilterCmp } from 'components';

@withTranslation()
@observer
class FilterCard extends Component {
    @observable filters = [];
    @observable filterSearch = '';
    @observable priceFrom = null;
    @observable priceTo = null;

    static propTypes = {
      t: PropTypes.func,
      handleApplyFilter: PropTypes.func.isRequired
    };

    componentDidMount() {
      const self = this;
      getHookahFilters().then(function (response) {
        self.filters = response.data;
      });
    }

    @computed get filterObject() {
      const res = this.filters.filter(filter => filter.checked).map(filter => {
        const tpl = {};
        tpl[filter.name] = true;
        return tpl;
      });

      if (this.filterSearch.trim() !== '') {
        res.push({ search_str: this.filterSearch });
      }

      if (this.priceFrom > 0) {
        res.push({ price_gt: this.priceFrom });
      }

      if (this.priceTo > 0) {
        res.push({ price_lt: this.priceTo });
      }

      return res;
    }

    onApplyFilter = () => {
      this.props.handleApplyFilter(this.filterObject);
    }

    renderFilterSearch = () => {
      return (
        <input
          className='input-search my-4 mb-5'
          type='search'
          value={this.filterSearch}
          onChange={(e) => { this.filterSearch = e.target.value; }}
        />
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
            <input
              type='checkbox'
              checked={filter.checked || false}
              onChange={(e) => { filter.checked = e.target.checked; }}
            />
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
          <input
            className='input-search flex-grow-1'
            type='number'
            value={this.priceFrom || ''}
            min='0'
            onChange={(e) => {
              const val = e.target.value;
              if (val && Number.parseInt(val) > 0) { this.priceFrom = val; }
            }}
          />
          <span className='m-2'>{t('Filter.To')}</span>
          <input
            className='input-search flex-grow-1'
            type='number'
            value={this.priceTo || ''}
            min='0'
            onChange={(e) => {
              const val = e.target.value;
              if (val && Number.parseInt(val) > 0) { this.priceTo = val; }
            }}
          />
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
