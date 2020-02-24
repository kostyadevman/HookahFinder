import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

import HookahImg from 'assets/img/hookah.png';
import moment from 'utils/moment';
import Routes from 'config/routes';

const TEXT_PREVIEW_LENGTH = 100;

@withTranslation()
@withRouter
class BlogCard extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    className: PropTypes.string,
    history: PropTypes.object.isRequired,
    blogItem: PropTypes.shape({
      id: PropTypes.string,
      image_url: PropTypes.string,
      tag: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { className, blogItem, t, history } = this.props;
    return (
      <Card className={className}>
        <img src={blogItem.image_url || HookahImg} className='card-img-top card-img-blog' alt='...' />
        <div className='card-tag'>{blogItem.tag}</div>
        <Card.Body>
          <Card.Title
            as='h5'
            onClick={() => { history.push(Routes.BlogItem.replace(':id', blogItem.id)); }}
          >
            {blogItem.title}
          </Card.Title>
          <h6 className='card-subtitle mb-2 text-muted'>{moment(blogItem.date).format(t('Formatted.DayMonthYear'))}</h6>
          <Card.Text>{blogItem.text.substring(0, TEXT_PREVIEW_LENGTH)}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default BlogCard;
