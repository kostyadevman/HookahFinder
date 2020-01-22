import { Switch, Route } from 'react-router-dom'
import Home from "../Home/Home";
import About from "../About/About";
import User from "../User/User";
import {Component} from "react";
import React from "react";



class Main extends Component {
  render() {
    return (
          <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/users' component={User}/>
            </Switch>
          </main>
    );
  }
}
export default Main;
