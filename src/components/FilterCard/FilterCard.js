import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

@withTranslation()
class FilterCard extends Component {
    static propTypes = {
      t: PropTypes.func.isRequired,
      handleApplyFilter: PropTypes.func.isRequired,
      mainContent: PropTypes.object.isRequired
    };

    render() {
      const { t, handleApplyFilter, mainContent } = this.props;

      return (
        <Card className='card-filter p-4 mb-4'>
          {mainContent}
          <Button
            onClick={handleApplyFilter}
            variant='primary'
            className='mt-5'
            size='lg'
          >
            {t('Filter.Apply')}
          </Button>
        </Card>
      );
    }
}
export default FilterCard;
