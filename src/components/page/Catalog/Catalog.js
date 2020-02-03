import React, { Component } from 'react';
import axios from "axios";
import {Row, Col, Container, Card, Form, Media} from 'react-bootstrap';
// import Media from "react-bootstrap/esm/Media";


// TODO
// split Catalog and FilterPanel
// Get data from Mock
// Generate data with faker.js
// Make FilterPanel toggle
// Pagination

const filters = [
    {
        "name": "filter_1",
    },
    {
        "name": "filter_2",
    },
    {
        "name": "filter_3",
    },
    {
        "name": "filter_4",
    },
        {
        "name": "filter_5",
    },
    {
        "name": "filter_6",
    }
    ]

const hookahs = [
    {
        "id": 1,
        "name": "h_1",
        "description": "AAAAAAAAAAAAAA",
        "raiting": 2
    },
    {
        "id": 2,
        "name": "h_2",
        "description": "BBBBBBBBBBBB",
        "raiting": 3
    },
    {
        "id": 3,
        "name": "h_3",
        "description": "CCCCCCCCCCCCCC",
        "raiting": 1
    },
    {
        "id": 4,
        "name": "h_4",
        "description": "DDDDDD",
        "raiting": 3
    },
    {
        "id": 5,
        "name": "h_5",
        "description": "EEEEEEEEEEEEEE",
        "raiting": 5
    }
]

class Catalog extends Component {
       constructor(props) {
        super(props);
       this.state = {
           hookahs: [],
           filters: []
       }
    }

  componentDidMount() {
    // axios.get('http://192.168.199.199:8002/api/v2/dockerapp/ho/')
    //   .then(response => this.setState({ hos: response.data }))
      this.setState({hookahs: hookahs});
      this.setState({filters: filters});
  }

  renderCatalog() {
       const { hookahs } = this.state
      console.log(hookahs)
      return (

        hookahs.map( hookah => (
            <Media key={hookah.id}>
              <img
                width={256}
                height={256}
                className="mr-3"
                src={hookah.id}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>{hookah.name}</h5>
                <p>
                    {hookah.description}
                </p>
              </Media.Body>
            </Media>
        )
        )
      )
    }

    renderFilterCard() {
        const { filters } = this.state
        // console.log(filters)
          return (
                 filters.map(filter => (
                 <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label={filter.name} />
                        </Col>
                  </Form.Group>
                  ))
          )
    }

  render() {

        return ( <Container>

                    <h1>Каталог</h1>
                  <Row>
                    <Col xs={12} md={8}>
                      {this.renderCatalog()}

                    </Col>
                    <Col xs={6} md={4}>
                      <Card>
                          <Card.Body>
                              <Card.Text>
                                  <Form>
                                      {this.renderFilterCard()}

                                  </Form>
                              </Card.Text>
                          </Card.Body>
                      </Card>

                    </Col>
                  </Row>
               </Container> )
  }
}

export default Catalog;
