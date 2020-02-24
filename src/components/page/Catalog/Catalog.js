import React, { Component } from 'react';
import { Row, Col, Container, Card, Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Switch, Route } from 'react-router-dom';

import HookahImg from 'assets/img/hookah.png';
import MoscowMetroLogo from 'assets/img/Moscow-metro-logo.png';

import Routes from 'config/routes';
import { getHookahs } from 'api/hookahs';
import { Rating, FilterCard, MyMap } from './components';
import { ModalFilter } from 'components';

// TODO
// Make FilterPanel toggle

const PAGE_SIZE = 5;

@withTranslation()
@observer
class Catalog extends Component {
  @observable hookahs = [];
  @observable itemsToShow = PAGE_SIZE;
  @observable showFilter = false;

  static propTypes = {
    t: PropTypes.func
  };

  handleLoadMore = () => {
    this.itemsToShow += PAGE_SIZE;
  }

  componentDidMount() {
    const self = this;
    getHookahs().then(function (response) {
      self.hookahs = response.data;
    });
  }

  handleShowFilter = () => {
    this.showFilter = true;
  }

  handleHideFilter = () => {
    this.showFilter = false;
  }

  renderCatalog() {
    const { t } = this.props;
    return (
      this.hookahs.slice(0, this.itemsToShow).map(hookah => {
        return (
          <Card key={hookah.id} className='flex-column flex-md-row bg-white mb-4'>
            <Card.Img variant='left' src={hookah.image_url || HookahImg} />
            <div className='p-3 card-right d-flex flex-row flex-md-column space-between align-items-end order-md-1'>
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
        );
      })
    );
  }

  renderLoadMore = () => {
    return (
      <div className='no-gutters row'>
        <div className='col-12 text-center'>
          <Button
            onClick={this.handleLoadMore}
            variant='outline-primary'
            className='button-show_more'
            size='lg'
          >
            {this.props.t('Catalog.ShowMore')}
          </Button>
        </div>
      </div>
    );
  }

  render() {
    const { t } = this.props;

    return (
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            <div className='d-flex align-items-center'>
              <h2 className='container-main-h2'>{t('Catalog.Header')}</h2>
              <Button
                variant='light'
                className='d-inline-block d-lg-none ml-auto active'
                onClick={this.handleShowFilter}
              >
                <img src='https://img.icons8.com/material-rounded/24/64247F/filter.png' />
              </Button>
            </div>
            <Switch>
              <Route exact path={Routes.Root}>
                {this.renderCatalog()}
                {this.itemsToShow < this.hookahs.length && this.renderLoadMore()}
              </Route>
              <Route exact path={Routes.Map}>
                <MyMap hookahs={this.hookahs} />
              </Route>
            </Switch>
          </Col>
          <Col lg={3} className='d-none d-lg-block'>
            <FilterCard />
          </Col>
          <ModalFilter
            show={this.showFilter}
            mainContent={<FilterCard />}
            onHide={this.handleHideFilter}
          />
        </Row>
      </Container>
    );
  }
}

export default Catalog;
