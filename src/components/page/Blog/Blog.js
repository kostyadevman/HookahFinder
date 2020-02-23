import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Col, Container, Row, Button, Image, Card, Form } from 'react-bootstrap';
import { getBlogFilters } from 'api/blog_filters';
import { getBlogArticles } from 'api/blog_articles';
import FilterIcon from 'assets/img/filterIcon.png';
import Rectangle from 'assets/img/Rectangle 3.23.png';

const BLOG_ARTICLES_COUNT = 20;
const VISIBLE_ARTICLE_COUNT = 4;

@withTranslation()
@observer
class Blog extends Component {
  @observable articles = [];
  @observable blog_filters = [];
  @observable visible_articles = VISIBLE_ARTICLE_COUNT;

  static propTypes = {
    t: PropTypes.func
  };

  renderFilterList() {
    return (
      this.blog_filters.map(filter => (
        <Form.Check custom key={filter.name}>
          <Form.Check.Input className='checkmark'></Form.Check.Input>
          <Form.Check.Label>{filter.name}</Form.Check.Label>
        </Form.Check>
      ))
    );
  }

  renderBlogFiter() {
    return (
      <Card className='card-filter p-4 mb-2'>
        <Form>
          <Form.Group>
            {this.renderFilterList()}
          </Form.Group>
          <Form.Group>

          </Form.Group>
        </Form>
      </Card>
    );
  }

  componentDidMount() {
    const self = this;
    getBlogFilters().then(function (response) {
      self.blog_filters = response.data;
    });

    getBlogArticles().then(function (response) {
      self.articles = response.data;
    });
  }

  renderArticles() {
    return (
      this.articles.slice(0, this.visible_articles).map(article =>
        <Col key={article.id} xs={12} lg={6} className='p-3'>
          <Card>
            <Card.Img variant='top' src={Rectangle} className='card-img-blog' />
            <div className='card-tag'>{article.tag}</div>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>{article.create_date}</Card.Subtitle>
              <Card.Text className='card-text'>
                {article.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
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
              <h2 className='container-main-h2 '>{t('Blog.Header')}</h2>
              <Button type='button' className='btn btn-light ml-auto d-inline-block d-lg-none'>
                <Image src={FilterIcon} />
              </Button>
            </div>
            <Row>
              {this.renderArticles()}
            </Row>
            <Row>
              <Col className='text-center'>
                <Button className='btn btn-lg btn-outline-primary button-show_more'>{t('Blog.Filter.LoadMore')}</Button>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className='d-none d-lg-block'>
            {this.renderBlogFiter()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blog;
