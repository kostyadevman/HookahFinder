import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import Star from '../../../assets/img/Star.png';
import StarEmpty from '../../../assets/img/Straempty.png';

const RATING_STARS_COUNT = 5;

class Rating extends Component {
  renderStars() {
    const stars = [];
    let star;
    for (let i = 0; i < RATING_STARS_COUNT; i++) {
      if (i < this.props.rating) {
        star = <Image key={i} src={Star} />;
      } else {
        star = <Image key={i} src={StarEmpty} />;
      }
      stars.push(star);
    }
    return stars;
  }

  render() {
    return this.renderStars();
  }
}

export default Rating;
