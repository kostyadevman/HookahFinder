import React, { Component } from 'react';
import { Row, Col, Container, Card, Form, Media, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import HookahImg from '../../../assets/img/hookah.png';
import { getHookahs } from 'api/hookahs';
import { getFilters } from 'api/filters';
import { withTranslation } from 'react-i18next';

// TODO
// split Catalog and FilterPanel
// Make FilterPanel toggle
// Pagination

const HO_COUNT = 20;
const RATING_STARS_COUNT = 5;
const VISIBLE_HO_COUNT = 5;

@withTranslation()
@observer
class CatalogMobx extends Component {
  @obserable hookahs = [];
  @obserable filters = [];
  @obserable visible = VISIBLE_HO_COUNT;

  static propTypes = {
    t: PropTypes.func
  };

  loadMore = () => {
    this.setState((prev) => {
      return { visible: prev.visible + VISIBLE_HO_COUNT };
    });
  }

  componentDidMount() {
    getHookahs().then(function (response) {
      this.hookahs = response.data;
    });

    getFilters().then(function (response) {
      this.filters = response.data;
    });
  }

  renderCatalog() {
    const { hookahs } = this.state;

    return (

      hookahs.slice(0, this.state.visible).map(hookah => (
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
                    <Media heading>{hookah.name}</Media>
                  </Col>
                  <Col>
                    <StarRatingComponent
                      starCount={RATING_STARS_COUNT}
                      value={hookah.rating}
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
    const { filters } = this.state;

    return (

      filters.map(filter => (
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
            {this.state.visible < this.state.hookahs.length &&
              <Button
                onClick={this.loadMore}
                variant='outline-primary'
              >
                LoadMore
              </Button>}

          </Col>
          <Col xs={6} md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <Form>
                    {this.renderFilterSearch()}
                    {this.renderFilterCard()}
                    {this.renderPriceRange()}
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>);
  }
}

export default CatalogMobx;
