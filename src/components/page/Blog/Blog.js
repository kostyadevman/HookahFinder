import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class Blog extends Component {
  @observable blogs = [];


  render() {
    return <div>Blog content</div>;
  }
}

export default Blog;
