import React, { Component } from 'react';
import './bulma.css';

class Contact extends Component {
  render() {
    return <div>
                <h1 id="contact" className="has-text-centered underline">CONTACT ME</h1>
                <form method="POST" action="https://formspree.io/jenniferbonner12@gmail.com"/>
                    <div className="columns">
                        <div className="column is-half is-offset-3">
                            <div className="card">
                                <div className="card-content">
                                    <div className="field">
                                        <label for="name" className="label">
                                            Name
                                        </label>
                                            <p className="control">
                                                <input className="input is-primary" type="text" name="name" placeholder="John A."/>
                                            </p>
                                    </div>
                    <div className="field">
                        <label for="company" className="label">
                            Company
                        </label>
                        <p className="control has-icon has-icon-right">
                            <input className="input is-primary" type="text" name="company" placeholder="Apple Corp." />
                                <span className="icon is-small">
                                    <i className="fa fa-check"></i>
                                </span>
                        </p>
                    </div>
                    <div className="field">
                        <label for="email" className="label">Email Address</label>
                            <p className="control has-icon has-icon-right"/>
                                <input className="input is-primary" type="email" name="email" placeholder="johnnyappleseed@gmail.com" />
                    </div>
                    <div className="field">
                        <label for="subject" className="label">Subject</label>
                            <p className="control has-icon has-icon-right"/>
                                <input className="input is-primary" type="text" name="subject" placeholder="Subject"/>
                    </div>
                    <div className="field">
                        <label for="message" className="label">Message</label>
                            <p className="control">
                                <textarea className="textarea" name="message" placeholder="Type message here..."></textarea>
                            </p>
                    </div>
                    <br/>
                    <div className="field is-grouped">
                        <p className="control">
                            <button className="button is-primary" type="button" value="Send">Submit</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  }
}

export default Contact;