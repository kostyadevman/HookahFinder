import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

import { getBlogItem, getBlogItems } from 'api/BlogItems';
import { BlogCard } from 'components';

const PAGE_SIZE = 3;

@withTranslation()
@withRouter
@observer
class BlogItem extends Component {
  @observable blogItem = {};
  @observable blogItems = [];
  @observable itemsToShow = PAGE_SIZE;

  static propTypes = {
    t: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.fetchBlogItem();
    this.fetchExtraItems();
  }

  fetchBlogItem = () => {
    const self = this;
    getBlogItem(this.props.match.params.id).then(function (response) {
      self.blogItem = response.data;
    });
  }

  fetchExtraItems = () => {
    const self = this;
    getBlogItems({ random_short_list: true }).then(function (response) {
      self.blogItems = response.data;
    });
  }

  renderBackButton = () => {
    const { history, t } = this.props;
    return (
      <Button variant='outline-primary' onClick={() => { history.goBack(); }}>
        {t('BlogItem.Back')}
      </Button>
    );
  }

  renderBlogItem = () => {
    return (
      <Card className='col-10'>
        <Card.Body>
          {this.renderBackButton()}
          <Card.Title as='h1' className='mt-3'>{this.blogItem.title}</Card.Title>
          <h6 className='card-subtitle mb-2 text-muted'>{this.blogItem.date}</h6>
          <Card.Text dangerouslySetInnerHTML={{ __html: this.blogItem.text }} />
          {this.renderBackButton()}
        </Card.Body>
      </Card>
    );
  }

  renderExtraBlogItems = () => {
    return this.blogItems.slice(0, this.itemsToShow).map((blogItem, i) => {
      return (<BlogCard key={i} className='col-3 mr-2' blogItem={blogItem} />);
    });
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        <Row>
          <Col xs={12} lg={12}>
            <div className='d-flex align-items-center'>
              {this.renderBlogItem()}
            </div>
            <Row>
              <h3 className='mt-5 mb-5'>{t('BlogItem.MoreArticles')}</h3>
            </Row>
            <Row>
              {this.renderExtraBlogItems()}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlogItem;
