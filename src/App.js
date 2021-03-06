import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import './App.scss';


const navLogo = {
  color: "#FF105E",
  fontSize: '30px'
}
const logoColor = {
  color: '#ffffff'
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'NTCH - Personal Portfolio',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        welcome: 'Hi, I\'m',
        title: 'NIKOLOZ TCHAVTCHANIDZE',
        subTitle: 'Developer',
        text: 'HTML / CSS / SASS / BOOTSTRAP / JAVASCRIPT / REACT.JS',
      },
      about: {
        title: 'About me',
      },
      portfolio: {
        title: 'Portfolio'
      },
      contact: {
        title: 'Lets Talk',
      },

    }
  }

  render() {
    return (
      <div>
        <Router>
          <Container className="p-0" fluid={true}>
            <Container >
              <Navbar className="navbar-dark animate__animated animate__fadeInUp" bg="tranparent" expand="lg">
                <Navbar.Brand style={logoColor}><a className="main-logo m-0 p-0" href="/">NTCH<span className="logo-span" style={navLogo}>.</span>GE</a></Navbar.Brand>
                <Navbar.Toggle className="border-0 p-0" aria-controls="navbar-toogle">
                  <div className="d-flex justify-content-between align-items-center h-100 flex-column burger-menu position-relative">
                    <input type="checkbox" id="nav-checkbox" />
                    <span className="toogle-line-1"></span>
                    <span className="toogle-line-2 mt-1"></span>
                    <span className="toogle-line-3 mt-1"></span>
                  </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/portfolio">Porfolio</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>

                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>
            <Route path="/" exact render={() => <HomePage welcome={this.state.home.welcome} title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} AboutTitle={this.state.about.title} PortfolioTitle={this.state.portfolio.title} ContactTitle={this.state.contact.title} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

            <Footer />

          </Container>
        </Router>
      </div>
    );
  }
}
console.log(` _   _  _____  _____  _   _     _____  _____ 
| \\ | ||_   _|/  __ \\| | | |   |  __ \\|  ___|
|  \\| |  | |  | /  \\/| |_| |   | |  \\/| |__  
|     |  | |  | |    |  _  |   | | __ |  __| 
| |\\  |  | |  | \\__/\\| | | | _ | |_\\ \\| |___ 
\\_| \\_/  \\_/   \\____/\\_| |_/(_) \\____/\\_____/ `)

export default App;
