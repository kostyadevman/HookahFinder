import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Star from 'assets/img/Star.png';
import StarEmpty from 'assets/img/Straempty.png';

const RATING_STARS_COUNT = 5;

class Rating extends Component {
  static propTypes = {
    rating: PropTypes.number.isRequired
  }

  renderStars() {
    const stars = [];
    for (let i = 0; i < RATING_STARS_COUNT; i++) {
      stars.push(<Image key={i} src={i < this.props.rating ? Star : StarEmpty} />);
    }
    return stars;
  }

  render() {
    return this.renderStars();
  }
}

export default Rating;
