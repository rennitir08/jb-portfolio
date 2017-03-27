import React, { Component } from 'react';
import './bulma.css';

class Resume extends Component {
  render() {
    return <div>
            <h1 id="resume" className="has-text-centered underline">RESUME</h1>
            <div className="columns">
                <div className="column is-offset-1">
                    <iframe src="https://brownmackie.optimalresume.com/previewDoc.php?tkn=a0978fcfdef8deaca974a408d3242109-r4292754">
                     This browser does not support PDFs. Please download the PDF to view it: <a href="resume.pdf">Download PDF</a>
                    </iframe>
                </div>
            </div>
            </div>
  }
}

export default Resume;