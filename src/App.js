import React, { Component } from 'react';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import './bulma.css';
import './index.css';


class App extends Component {
  render() {
    return ( <div>
    <nav className="nav has-shadow is-fixed-top">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src="jblogo.png" alt="logo"/>
            </a>
            <a className="nav-item is-tab is-hidden-mobile" href="#home">Home</a>
            <a className="nav-item is-tab is-hidden-mobile" href="#projects">Projects</a>
            <a className="nav-item is-tab is-hidden-mobile" href="#resume">Resume</a>
            <a className="nav-item is-tab is-hidden-mobile" href="#contact">Contact</a>  
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab is-hidden-tablet" href="#home">Home</a>
            <a className="nav-item is-tab is-hidden-tablet" href="#projects">Projects</a>
            <a className="nav-item is-tab is-hidden-tablet" href="#resume">Resume</a>
            <a className="nav-item is-tab is-hidden-tablet" href="#contact">Contact</a>
            <a href="https://www.linkedin.com/in/jennifer-bonner-28560497" target="_blank"><img className="square is-pulled-right" src="square.jpg" alt="profile"/></a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-body">
          <div className="container">
           <div className="name has-text-centered">Jennifer Bonner</div>
           <div className="title has-text-centered">Front End Engineer</div>

              <div className="tile is-parent is-vertical">
                <article id="animation" className="tile is-child icons">
                  <div className="languages has-text-centered">
                    <i className="devicon-html5-plain-wordmark colored"></i>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                    <i className="devicon-javascript-plain colored"></i>
                    <i className="devicon-gulp-plain colored"></i>
                    <i className="devicon-bootstrap-plain-wordmark colored"></i>
                    <i className="devicon-sass-original colored"></i>
                    <i className="devicon-jquery-plain-wordmark colored"></i>
                    <i className="devicon-react-original-wordmark colored"></i>
                    <i className="devicon-wordpress-plain-wordmark colored"></i>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>

    <br/>
    <br/>
        <Projects/>
    <br/>
    <br/>
        <Resume/>
    <br/>
    <br/>
        <Contact/>
    <br/>
    <br/>

      <footer className="footer">
  <div className="container">
    <div className="content has-text-centered">
      <p>
        <strong>Portfolio</strong> by <a href="https://www.linkedin.com/in/jennifer-bonner-28560497" target="_blank">Jennifer Bonner</a> &copy; 2017
      </p>
      <p>
        <a className="icon" href="https://github.com/rennitir08" target="_blank">
          <i className="fa fa-github"></i>
        </a>
      </p>
    </div>
  </div>
</footer>

    </div>
    )
  }
}

export default App;
