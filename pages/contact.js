import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import ReactGA from 'react-ga'
import classNames from 'classnames'
import { config } from 'config'

import { map } from 'lodash'

import services from '../data/services'
import benefits from '../data/benefits'
import { logo } from '../images'

import ExporterForm from '../components/ExporterForm'

export default class Contact extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      showForm: false
    }
  }

  render () {
    return (
      <div>
        <section className="c-area u-theme--highlight">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-4-tablet">
                <div className="o-box o-paint-bg--light-gray">
                  <h1>Contact Us</h1>

                  <h6 className="u-margin-bottom-none">Headquarter Germany</h6>
                  <p>
                    Scheyerer Str. 10<br/>
                    85276 Pfaffenhofen, Germany<br/>
                  </p>

                  <h6 className="u-margin-bottom-none">Online</h6>
                  <p>
                    <a href="mailto:federico@trade-iq.com">federico@trade-iq.com</a><br/>
                    <a href="mailto:sebastian@trade-iq.com">sebastian@trade-iq.com</a>
                  </p>
                </div>
              </div>
              <div className="o-layout__item u-8-tablet">
                <div className="o-box o-paint-bg--light-gray">
                  <h2>Send us a message</h2>
                  <form
                    action="https://formspree.io/sebastian@trade-iq.com"
                    method="POST"
                  >
                    <label>Company</label>
                    <input type="text" name="company" placeholder="Acme Co." />
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="John Doe" />
                    <label>Email Address</label>
                    <input type="email" name="_replyto" placeholder="john@example.com" />
                    <label>Message</label>
                    <textarea name="message" rows="10" placeholder="Write your message here and we will get back to you"></textarea>
                    <input type="submit" value="Send" className="c-btn c-btn--primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
