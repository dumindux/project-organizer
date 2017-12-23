import React from 'react';
import {Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import NavBar from './navBar/NavBar';
import {Container} from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container fluid={true}>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Container>
      </div>
    );
  }
}

export default App;
