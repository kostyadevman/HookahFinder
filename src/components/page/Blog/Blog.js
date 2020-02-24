import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Row, Col, Container, Button } from 'react-bootstrap';

import HookahImg from 'assets/img/hookah.png';
import { getBlogItems } from 'api/BlogItems';
import { FilterCard } from './components';

const PAGE_SIZE = 4;

@withTranslation()
@observer
class Blog extends Component {
  @observable blogItems = [];
  @observable itemsToShow = PAGE_SIZE;

  static propTypes = {
    t: PropTypes.func.isRequired
  }

  componentDidMount() {
    const self = this;
    getBlogItems().then(function (response) {
      self.blogItems = response.data;
    });
  }

  handleLoadMore = () => {
    this.itemsToShow += PAGE_SIZE;
  }

  renderBlogItems = () => {
    return this.blogItems.slice(0, this.itemsToShow).map((blogItem, i) => {
      return (
        <div key={i} className='col-12 col-lg-6 p-3'>
          <div className='card'>
            <img src={blogItem.image_url || HookahImg} className='card-img-top card-img-blog' alt='...' />
            <div className='card-tag'>{blogItem.tag}</div>
            <div className='card-body'>
              <h5 className='card-title'>{blogItem.title}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>{blogItem.date}</h6>
              <p className='card-text'>
                {blogItem.text}
              </p>
            </div>
          </div>
        </div>
      );
    });
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
            {this.props.t('Blog.ShowMore')}
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
              <h2 className='container-main-h2'>{t('Blog.Header')}</h2>
            </div>
            <Row>
              {this.renderBlogItems()}
            </Row>
            {this.itemsToShow < this.blogItems.length && this.renderLoadMore()}
          </Col>
          <Col lg={3} className='d-none d-lg-block'>
            <FilterCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blog;
