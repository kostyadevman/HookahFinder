import React, { Component } from 'react';
import { Row, Col, Container, Card, Form, Media, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import HookahImg from '../../../assets/img/hookah.png';
import { getHookahs } from 'api/hookahs';
import { getFilters } from 'api/filters';


// TODO
// split Catalog and FilterPanel
// Make FilterPanel toggle
<style type="text/css">
  {`
  .btn-flat {
    background-color: purple;
    color: white;
  }

  .btn-xxl {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
  }
  `}
</style>

const HO_COUNT = 20;
const RATING_STARS_COUNT = 5;
const VISIBLE_HO_COUNT = 5;

@withTranslation()
@observer
class Catalog extends Component {
  @observable hookahs = [];
  @observable filters = [];
  @observable visible = VISIBLE_HO_COUNT;

  static propTypes = {
    t: PropTypes.func
  };

  loadMore = () => {
      return this.visible = this.visible + VISIBLE_HO_COUNT;
  }

  componentDidMount() {
    self = this
    getHookahs().then(function (response) {
      self.hookahs = response.data;
    });

    getFilters().then(function (response) {
      self.filters = response.data;
    });
  }

  renderCatalog() {

    return (

      this.hookahs.slice(0, this.visible).map(hookah => (
        <div key={hookah.id}>
          <Media>
            <img
              width={256}
              height={256}
              className='mr-3'
              src={HookahImg}
              alt='Generic placeholder'
            />
            <Media.Body>
              <Container>
                <Row>
                  <Col>
                    <Media>{hookah.name}</Media>
                  </Col>
                  <Col>
                    <StarRatingComponent
                      starCount={RATING_STARS_COUNT}
                      value={hookah.rating}
                      name="name"
                    />
                  </Col>
                </Row>
              </Container>
            </Media.Body>
          </Media>
          <br />
        </div>
      )
      )
    );
  }

  renderFilterSearch() {
    return (
      <Form.Group as={Col}>
        <Form.Control />
      </Form.Group>
    );
  }

  renderFilterCard() {
        return (

      this.filters.map(filter => (
        <Form.Group as={Col} md='4' key={filter.name}>
          <Form.Check label={filter.name} />
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
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <br />
            <h1>Каталог</h1>
            <br />
            {this.renderCatalog()}

          </Col>
          <Col xs={12} md={8} className="text-center">
            {this.visible < this.hookahs.length &&

              <Button
                onClick={this.loadMore}
                variant='outline-primary'
                className='button-show_more'
                size='lg'
              >
                LoadMore
              </Button>}
          </Col>
          <Col xs={6} md={4}>
            <Card>
              <Card.Body>
                  <Form>
                    {this.renderFilterSearch()}
                    {this.renderFilterCard()}
                    {this.renderPriceRange()}
                  </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>);
  }
}

export default Catalog;
