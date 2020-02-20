import React, { Component } from 'react';
import { Row, Col, Container, Card, Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import HookahImg from '../../../assets/img/hookah.png';
import MoscowMetroLogo from '../../../assets/img/Moscow-metro-logo 1.png';

import getHookahs from 'api/hookahs';
import Rating from './Rating';
import FilterCard from './FilterCard';

// TODO
// Make FilterPanel toggle

const VISIBLE_HO_COUNT = 5;

@withTranslation()
@observer
class Catalog extends Component {
  @observable hookahs = [];
  @observable visible = VISIBLE_HO_COUNT;

  static propTypes = {
    t: PropTypes.func
  };

  handleLoadMore = () => {
    const res = this.visible += VISIBLE_HO_COUNT;
    return res;
  }

  componentDidMount() {
    self = this;
    getHookahs().then(function (response) {
      self.hookahs = response.data;
    });
  }

  renderCatalog() {
    const { t } = this.props;
    return (

      this.hookahs.slice(0, this.visible).map(hookah => (
        <Card key={hookah.id} className='flex-column flex-md-row bg-white mb-4'>
          <Card.Img variant='left' src={HookahImg} />
          <div className='p-3  card-right d-flex flex-row flex-md-column space-between align-items-end order-md-1'>
            <div className='rating flex-grow-1'>
              <Rating rating={hookah.rating} />
            </div>
            <div>
              {t('Catalog.From')} {hookah.cost} {t('Catalog.Currency')}.
            </div>
          </div>
          <Card.Body>
            <Card.Title>{hookah.name}</Card.Title>
            <Card.Text className='card-text'>
              <Image src={MoscowMetroLogo} />{hookah.metro}
            </Card.Text>
            <Card.Text className='card-text'>{hookah.description}</Card.Text>
          </Card.Body>
        </Card>
      )
      )
    );
  }

  render() {
    const { t } = this.props;

    return (
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            <div className='d-flex align-items-center'>
              <h2 className='container-main-h2 '>{t('Catalog.Header')}</h2>
            </div>
            {this.renderCatalog()}
            {this.visible < this.hookahs.length &&

              <Button
                onClick={this.handleLoadMore}
                variant='outline-primary'
                className='button-show_more'
                size='lg'
              >
                LoadMore
              </Button>}
          </Col>
          <Col lg={3} className='d-none d-lg-block'>
            <FilterCard />
          </Col>
        </Row>
      </Container>);
  }
}

export default Catalog;
