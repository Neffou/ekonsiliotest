import React, { Component } from 'react';
import { Navbar, Col, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../NavBar/NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }
  render() {
    return (
      <div className="box">
        < Col sm="12" >
          <Navbar className="navBarAccueil">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              <CardText className="cardNavBar">
                Accueil
          </CardText>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/Historique">
              <CardText className="cardNavBar">
                Conversation
          </CardText>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/Conversation">
              <CardText className="cardNavBarBorder">
                Créer une conversation
          </CardText>
            </Link>
          </Navbar>
        </Col>
      </div>
    );
  }
}

export default NavBar



