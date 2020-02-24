import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Row, Col, Container, Button } from 'react-bootstrap';

import FilterImg from 'assets/img/filter.png';
import { getBlogItems } from 'api/BlogItems';
import { FilterCard } from './components';
import { ModalFilter, BlogCard } from 'components';

const PAGE_SIZE = 4;

@withTranslation()
@observer
class Blog extends Component {
  @observable blogItems = [];
  @observable itemsToShow = PAGE_SIZE;
  @observable showFilter = false;

  static propTypes = {
    t: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.onApplyFilter();
  }

  onApplyFilter = (filterObject) => {
    const self = this;
    getBlogItems(filterObject).then(function (response) {
      self.blogItems = response.data;
    });
  }

  handleLoadMore = () => {
    this.itemsToShow += PAGE_SIZE;
  }

  handleShowFilter = () => {
    this.showFilter = true;
  }

  handleHideFilter = () => {
    this.showFilter = false;
  }

  renderBlogItems = () => {
    return this.blogItems.slice(0, this.itemsToShow).map((blogItem, i) => {
      return (
        <BlogCard
          key={i}
          className='col-12 col-lg-6 p-3'
          blogItem={blogItem}
        />
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

  renderFilter = () => {
    return (<FilterCard handleApplyFilter={this.onApplyFilter} />);
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            <div className='d-flex align-items-center'>
              <h2 className='container-main-h2'>{t('Blog.Header')}</h2>
              <Button
                variant='light'
                className='d-inline-block d-lg-none ml-auto active'
                onClick={this.handleShowFilter}
              >
                <img src={FilterImg} />
              </Button>
            </div>
            <Row>
              {this.renderBlogItems()}
            </Row>
            {this.itemsToShow < this.blogItems.length && this.renderLoadMore()}
          </Col>
          <Col lg={3} className='d-none d-lg-block'>
            {this.renderFilter()}
          </Col>
          <ModalFilter
            show={this.showFilter}
            mainContent={this.renderFilter()}
            onHide={this.handleHideFilter}
          />
        </Row>
      </Container>
    );
  }
}

export default Blog;
