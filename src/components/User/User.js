import React, { Component } from 'react';
import Header from "../Header/Header";
import axios from "axios";
import { Media } from 'react-bootstrap'

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = { users: [] }
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=1')
      .then(response => this.setState({ users: response.data.data }))
  }

  renderUsers() {
    const { users } = this.state

    return users.map( user => (
        <Media key={user.id}>
          <img
            width={256}
            height={256}
            className="mr-3"
            src={user.avatar}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Media Heading</h5>
            <p>
                {user.first_name} {user.last_name}
            </p>
          </Media.Body>
        </Media>
    ))
  }

  render() {
    return <div>{ this.renderUsers() }</div>
  }
}

export default User;
