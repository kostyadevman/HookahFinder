import React, { Component } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import PropTypes from 'prop-types';

import { getFilters } from 'api/filters';

const Filters = [
  {
    name: 'filter_1'
  },
  {
    name: 'filter_2'
  },
  {
    name: 'filter_3'
  },
  {
    name: 'filter_4'
  },
  {
    name: 'filter_5'
  },
  {
    name: 'filter_6'
  }
];

@withTranslation()
@observer
class FilterCard extends Component {
    @observable filters = [];

    static propTypes = {
      t: PropTypes.func
    };

    componentDidMount() {
      // self = this
      // getFilters().then(function (response) {
      //     self.filters = response.data;
      // });
      this.filters = Filters;
      // console.log(this.filters)
    }

    renderFilterSearch() {
      return (
        <Form.Group as={Col}>
          <Form.Control />
        </Form.Group>
      );
    }

    renderFilters() {
      return (
        this.filters.map(filter => (
          <Form.Group key={filter.name}>
            <Form.Check label={filter.name}></Form.Check>
          </Form.Group>
        ))
      );
    }

    renderPriceRange() {
      const { t } = this.props;
      return (
        <Form.Group as={Row} md='10'>
          <Form.Label column sm='2'>{t('Filter.From')}</Form.Label>
          <Col sm='3'>
            <Form.Control />
          </Col>
          <Form.Label column sm='2'>{t('Filter.To')}</Form.Label>
          <Col sm='3'>
            <Form.Control />
          </Col>
        </Form.Group>
      );
    }

    render() {
      return (
        <Card>
          <Card.Body>
            <Form>
              {this.renderFilterSearch()}
              {this.renderFilters()}
              {this.renderPriceRange()}
            </Form>
          </Card.Body>
        </Card>
      );
    }
}
export default FilterCard;
