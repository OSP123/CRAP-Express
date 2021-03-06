import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;