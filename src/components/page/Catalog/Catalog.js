import React, { Component } from 'react';
import {Row, Col, Container, Card, Form, Media, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Faker from 'faker';
import StarRatingComponent from 'react-star-rating-component';

import HookahImg from '../../../assets/img/hookah.png';
import { getHookahs } from 'api/hookahs'
import { getFilters} from "api/filters";
import {withTranslation} from "react-i18next";


// TODO
// split Catalog and FilterPanel
// Make FilterPanel toggle
// Pagination

const HO_COUNT = 20;
const RATING_STARS_COUNT = 5;
const VISIBLE_HO_COUNT =  5;

@withTranslation()
class Catalog extends Component {

  constructor(props) {

    super(props);
    this.state = {
      hookahs: [],
      filters: [],
      visible: VISIBLE_HO_COUNT
    };
    this.loadMore = this.loadMore.bind(this);

  }
  static propTypes = {
    t: PropTypes.func
  };


  loadMore() {
       this.setState((prev) => {
           return {visible: prev.visible + VISIBLE_HO_COUNT};
       })
  }

  componentDidMount() {
    // this.setState({ filters: filters });
    const self = this
    getHookahs().then(function (response) {
          self.setState({hookahs: response.data})
    });

    getFilters().then(function (response) {
          self.setState({filters: response.data})
    })
    // this.getFakeData()
  }

  // getFakeData() {
  //   let hookahs = []
  //   for (let i = 0; i < HO_COUNT; i++) {
  //     let hookah = {
  //       id: i,
  //       name: Faker.internet.userName(),
  //       metro: Faker.random.arrayElement(["Бауманская"," Улица 1905 года","Юго-западная"]),
  //       description: Faker.lorem.sentences(3,3),
  //       cost: Faker.random.number({min:700, max:3000}),
  //       rating: Faker.random.number({min:1, max:5}),
  //
  //     };
  //     hookahs.push(hookah)
  //   }
  //   console.log(hookahs)
  // }

  renderCatalog() {
    const { hookahs } = this.state;
    // console.log(hookahs)
    return (

      hookahs.slice(0, this.state.visible).map(hookah => (
        <div>
          <Media key={hookah.id}>
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
                    <Media heading={true}>{hookah.name}</Media>
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
        <Form.Group as={Col} md='4'>
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
    return (<Container>
      <Row>
        <Col xs={12} md={8}>
          <br />
          <h1>Каталог</h1>
          <br />
          {this.renderCatalog()}
          {this.state.visible < this.state.hookahs.length &&
              <Button
                  onClick={this.loadMore}
                  variant="outline-primary">
                  LoadMore
              </Button>
          }

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

export default Catalog;
