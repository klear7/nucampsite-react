import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites';
import Campsiteinfo from './components/CampsiteInfoComponent';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          campsites: CAMPSITES
      };
  }
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
              <Directory campsites={this.state.campsites} />
              <Campsiteinfo campsites={this.state.campsites} />
          </div>
      );
  }
}




export default App;
