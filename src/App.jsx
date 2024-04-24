// * import style
import './App.css';
import './style/style.css'
import 'rsuite/dist/rsuite.min.css'

// ? import component
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NotificationUnderDevelopement from './components/Notification';
import Path from './components/Path';
import Summary from './components/Summary';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';

// ! import library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontendProject from './components/FrontendProject';
import BackendProjects from './components/BackendProject';
import CompletedProject from './components/CompletedProject';


function App() {
  return (<>
    <Router>
      {/* <ScrollProgressBar /> */}
      <div className="body bg-dark-primary mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-Inter">
        <Switch>
          <Route exact path={"/"}>
            <NotificationUnderDevelopement />
            <Navbar />
            <HeroSection />
            <BackToTop />
            <Path />
            <Summary />
            <FeaturedProjects />
            <Contact />
          </Route>
          <Route path={"/frontend"}>
            <FrontendProject />
          </Route>
          <Route path={"/backend"}>
            <BackendProjects />
          </Route>
          <Route path={"/completed-project"}>
            <CompletedProject />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  </>
  );
}

export default App;
