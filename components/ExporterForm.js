import React, { Component, PropTypes } from 'react'

import { map } from 'lodash'

export default class ExporterForm extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault()
    const krass = this
    debugger
  }

  renderExportForm() {
    return (
      <div>
        <p>
          Access information on duty rates, documentation and service providers
          for your export and import activities. Enter new markets and obtain
          new suppliers. Get expert assistance handling international trade for
          you and get quotes on shipping rates.
        </p>

        <div id="mc_embed_signup">
          <form ref="form" onSubmit={this.handleSubmit} action="//trade-iq.us14.list-manage.com/subscribe/post?u=57909444beb143f85de7388ed&amp;id=4db8bd8bed" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div className="o-layout">
              <div className="o-layout__item">
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                	<label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                	<input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
              </div>

              <div className="o-layout__item u-6-tablet">
                <div className="mc-field-group">
                	<label htmlFor="mce-FNAME">First Name  <span className="asterisk">*</span></label>
                	<input type="text" name="FNAME" className="required" id="mce-FNAME" />
                </div>
              </div>

              <div className="o-layout__item u-6-tablet">
                <div className="mc-field-group">
                	<label htmlFor="mce-LNAME">Last Name  <span className="asterisk">*</span></label>
                	<input type="text" name="LNAME" className="required" id="mce-LNAME" />
                </div>
              </div>

              <div className="o-layout__item">
                <div className="mc-field-group">
                	<label htmlFor="mce-COMPANY">Company  <span className="asterisk">*</span></label>
                	<input type="text" name="COMPANY" className="required" id="mce-COMPANY" />
                </div>
                <div className="mc-field-group">
                	<label htmlFor="mce-COUNTRY">Country  <span className="asterisk">*</span></label>
                	<input type="text" name="COUNTRY" className="required" id="mce-COUNTRY" />
                </div>
                <div className="mc-field-group">
                	<label htmlFor="mce-TYPE">Type of Service  <span className="asterisk">*</span></label>
                	<select name="TYPE" className="required" id="mce-TYPE">
                  	<option value=""></option>
                  	<option value="Freight Forwarder">Freight Forwarder</option>
                    <option value="Customs Broker">Customs Broker</option>
                    <option value="Logistics Provider">Logistics Provider</option>
                    <option value="Other">Other</option>
                	</select>
                </div>
              	<div id="mce-responses" className="clear">
              		<div className="response" id="mce-error-response" style={{display: 'none'}}></div>
              		<div className="response" id="mce-success-response" style={{display: 'none'}}></div>
              	</div>
                <div className="u-hidden-visually" aria-hidden="true">
                  <input type="text" name="b_57909444beb143f85de7388ed_4db8bd8bed" tabIndex="-1" defaultValue="" />
                </div>
                <div className="u-text--center">
                  <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe" className="c-btn c-btn--primary" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

  renderProviderForm() {
    return (
      <div>
        <p>
          We match you with SMEs from several countries, who are looking to
          export and import. Get qualified business leads, increase revenue and
          grow your client base.
        </p>
      </div>
    )
  }

  render() {
    if (this.props.form === 'export') {
      return this.renderExportForm()
    } else {
      return this.renderProviderForm()
    }
  }
}
