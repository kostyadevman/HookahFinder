import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Container, Card, Form, Media } from 'react-bootstrap';
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

// const hookahs = [
//     {
//         "id": 1,
//         "name": "h_1",
//         "description": "AAAAAAAAAAAAAA",
//         "raiting": 2
//     },
//     {
//         "id": 2,
//         "name": "h_2",
//         "description": "BBBBBBBBBBBB",
//         "raiting": 3
//     },
//     {
//         "id": 3,
//         "name": "h_3",
//         "description": "CCCCCCCCCCCCCC",
//         "raiting": 1
//     },
//     {
//         "id": 4,
//         "name": "h_4",
//         "description": "DDDDDD",
//         "raiting": 3
//     },
//     {
//         "id": 5,
//         "name": "h_5",
//         "description": "EEEEEEEEEEEEEE",
//         "raiting": 5
//     }
// ]

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hookahs: [],
      filters: []
    };
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

      hookahs.map(hookah => (
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
