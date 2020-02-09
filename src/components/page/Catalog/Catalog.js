import React, { Component } from 'react';
import axios from 'axios';
import {Row, Col, Container, Card, Form, Media, Button} from 'react-bootstrap';
// import Media from "react-bootstrap/esm/Media";
import HookahImg from '../../../assets/img/hookah.png';
import Faker from 'faker';
import StarRatingComponent from 'react-star-rating-component';

// TODO
// split Catalog and FilterPanel
// Get data from Mock
// Generate data with faker.js
// Make FilterPanel toggle
// Pagination
const HO_COUNT = 20;
const RATING_STARS_COUNT = 5;
const VISIBLE_HO_COUNT =  5;

const filters = [
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

  loadMore() {
       this.setState((prev) => {
           return {visible: prev.visible + VISIBLE_HO_COUNT};
       })
  }

  componentDidMount() {
    this.setState({ filters: filters });
  }

  componentWillMount() {
    for (let i = 0; i < HO_COUNT; i++) {
      const hookah = {
        id: i,
        name: Faker.internet.userName(),
        raiting: 2

      };
      this.setState(prevState => ({
        hookahs: [...prevState.hookahs, hookah]
      }));
    }
  }

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
                    <Media heading>{hookah.name}</Media>
                  </Col>
                  <Col>
                    <StarRatingComponent
                      starCount={RATING_STARS_COUNT}
                      value={hookah.raiting}
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
    return (
      <Form.Group as={Row} md='10'>
        <Form.Label column sm='2'>от</Form.Label>
        <Col sm='3'>
          <Form.Control />
        </Col>
        <Form.Label column sm='2'>до</Form.Label>
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
