import React, { Component } from 'react';
import './bulma.css';
import './index.css';

class Projects extends Component {
  render() {
    return <div>
            <h1 id="projects" className="has-text-centered underline">PROJECTS</h1>
            <br/>
            <br/>
            <h6 className="has-text-centered">Surf & Paddle Mock-up</h6>
            <div className="columns">
                <div className="column is-6 is-offset-3 shadow">
                    <a href="https://rennitir08.github.io/d4-recreate-surf-and-paddle/" target="_blank"><img src="/surfpaddle.jpg" alt="link"/></a>
                </div>
                <div className="column is-3">
                    <ul className="icon-size">
                        <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                        <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                    </ul>
                </div>
            </div>
            <h6 className="has-text-centered">Mock-up using Sass</h6>
            <div className="columns">
                <div className="column is-6 is-offset-3 shadow">
                    <a href="https://rennitir08.github.io/d1-use-gulp-sass/" target="_blank"><img src="/gulp:sass.jpg" alt="link"/></a>
                </div>
                <div className="column is-3">
                    <ul className="icon-size">
                        <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                        <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                        <li><i className="devicon-gulp-plain colored"></i></li>
                        <li><i className="devicon-sass-original colored"></i></li>
                    </ul>
                </div>
            </div>
            <h6 className="has-text-centered">Recreate Etsy Search</h6>
            <div id="projects" className="columns">
                <div className="column is-6 is-offset-3 shadow">
                    <a href="https://rennitir08.github.io/d2-recreate-etsy-search/" target="_blank"><img src="/etsysearch.jpg" alt="link"/></a>
                </div>
                <div className="column is-3">
                    <ul className="icon-size">
                        <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                        <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                        <li><i className="devicon-javascript-plain colored"></i></li>
                    </ul>
                </div>
            </div>
            <h6 className="has-text-centered">Simple Calculator</h6>
            <div id="projects" className="columns">
                <div className="column is-6 is-offset-3 shadow">
                    <a href="https://rennitir08.github.io/d3-make-a-calculator/" target="_blank"><img src="/calculator.jpg" alt="link"/></a>
                </div>
                <div className="column is-3">
                    <ul className="icon-size">
                        <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                        <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                        <li><i className="devicon-javascript-plain colored"></i></li>
                    </ul>
                </div>
            </div>
            <h6 className="has-text-centered">Responsive Website</h6>
            <div id="projects" className="columns">
                <div className="column is-6 is-offset-3 shadow">
                    <a href="https://rennitir08.github.io/d2-create-a-responsive-website/" target="_blank"><img src="/responsive.jpg" alt="link"/></a>
                </div>
                <div className="column is-3">
                    <ul className="icon-size">
                        <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                        <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                        <li><i className="devicon-gulp-plain colored"></i></li>
                    </ul>
                </div>
            </div>
            </div>
  }
}

export default Projects;