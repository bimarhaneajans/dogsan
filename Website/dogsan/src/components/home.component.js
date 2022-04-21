import React, { Component } from "react";

import UserService from "../services/user.service";
import Header from "../components/header/header";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
      {/*   <header className="jumbotron">
           <h3>{this.state.content}</h3> 
        </header> */} 
        <Header/>
      </div>
    );
  }
}
