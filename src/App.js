import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import portfolios from './data/portfolio.json'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>

      <div>
        <Nav />

        <Switch>
          <Route exact path={['/', '/about', '/React-Portfolio']}>
            <About />
          </Route>

          <Route exact path='/portfolio'>
            <Portfolio props={portfolios} />
          </Route>

          <Route exact path='/resume'>
            <Resume />
          </Route>

          <Route exact path='/contact' >
            <Contact />
          </Route>

        </Switch>

        <Footer />

      </div>
    </Router >

  );
}

export default App;

