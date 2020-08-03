import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        title: 'Maja',
        headerLinks: [
          { title: 'Home', path: '/' },
          { title: 'About', path: '/about' },
          { title: 'Contact', path: '/contact' }
        ],
        home: {
          title: 'Be unique',
          subTitle: 'Projects that makes difference',
          text: 'Check my projects below'
        },
        about: {
          title: 'About me',
        },
        contact: {
          title: 'Contact me',
        }
    }
  }
  render() {
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Portfolio</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" exact render={() => <About title={this.state.about.title}/>} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title}/>} />
          <Footer />
        </Container>
      </Router>
    );
  } 
}
export default App;
