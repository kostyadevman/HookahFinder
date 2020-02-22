import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Faker from 'faker';
import { getBlogFilters } from 'api/blog_filters';

const BLOG_ARTICLES_COUNT = 20;

@withTranslation()
@observer
class Blog extends Component {
  @observable articles = [];
  @observable blog_filters = [];

  static propTypes = {
    t: PropTypes.func
  };

  componentDidMount() {
    const self = this;
    getBlogFilters().then(function (response) {
      self.blog_filters = response.data;
    });
  }

  getFakeData() {
    const articles = [];
    const tag_list = [];
    this.blog_filters.map(b_filter => {
      tag_list.push(b_filter.name);
    });
    for (let i = 0; i < BLOG_ARTICLES_COUNT; i++) {
      const article = {
        id: i,
        create_date: Faker.date.past(30),
        title: Faker.internet.userName(),
        tag: Faker.random.arrayElement(tag_list),
        description: Faker.lorem.sentences(3, 3)
      };
      articles.push(article);
    }

    console.log(articles);
    console.log(tag_list);
    return <p>asdf</p>;
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            <div className='d-flex align-items-center'>
              <h2 className='container-main-h2 '>{t('Blog.Header')}</h2>
            </div>
            {this.getFakeData()}
          </Col>
          <Col lg={3} className='d-none d-lg-block' />
        </Row>
      </Container>
    );
  }
}

export default Blog;
