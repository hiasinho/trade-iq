import React, { Component, PropTypes } from 'react'
import { ajax } from 'jquery'
import serialize from 'form-serialize'
import classNames from 'classnames'
import { map, merge } from 'lodash'

export default class ExporterForm extends Component {

  constructor(params) {
    super(params)

    this.state = {
      hasErrors: false,
      message: ''
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    const data = serialize(this.refs.form, { hash: true })

    ajax({
      type: this.refs.form.method,
      url: this.refs.form.action,
      data: data,
      cache: false,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      error: (err) => {
        console.log(err)
        this.setState({
          hasErrors: true,
          message: 'Could not connect to the registration server. Please try again later.'
        })
      },
      success: (data) => {
        console.log(data)
        if (data.result != "success") {
          this.setState({
            hasErrors: true,
            message: data.msg
          })
        } else {
          this.setState({
            hasErrors: false,
            message: data.msg
          })
        }
      }
    })
  }

  handleChange = (ev) => {
    this.setState({
      [`${ev.target.name}`]: ev.target.value
    })
  }

  renderErrors() {
    if (this.state.message === '') return

    const classes = classNames(
      'c-alert', {
        'c-alert--success': !this.state.hasErrors,
        'c-alert--error': this.state.hasErrors,
      }
    )

    return (
      <div className={classes} dangerouslySetInnerHTML={{ __html: this.state.message }} />
    )
  }

  renderSMEForm() {
    return (
      <div>
        <p>
          We match you with SMEs from several countries, who are looking to
          export and import. Get qualified business leads, increase revenue and
          grow your client base.
        </p>

        <div>
          <form
            ref="form"
            onSubmit={this.handleSubmit}
            action="//trade-iq.us14.list-manage.com/subscribe/post-json?u=57909444beb143f85de7388ed&id=4db8bd8bed&c=?"
            method="get"
            noValidate
          >
            <div className="o-layout">
              <div className="o-layout__item">
                <div><span>*</span> indicates required</div>

              	<label>Email Address  <span>*</span></label>
              	<input type="email" name="EMAIL" />
              </div>

              <div className="o-layout__item u-6-tablet">
              	<label>First Name  <span>*</span></label>
              	<input type="text" name="FNAME" />
              </div>

              <div className="o-layout__item u-6-tablet">
              	<label>Last Name  <span>*</span></label>
              	<input type="text" name="LNAME" />
              </div>

              <div className="o-layout__item">
              	<label>Company  <span>*</span></label>
              	<input type="text" name="COMPANY" />

              	<label>Country  <span>*</span></label>
              	<input type="text" name="COUNTRY" />

              	<label>Type of Service <span>*</span></label>
              	<select name="TYPE">
                	<option value=""></option>
                	<option value="Freight Forwarder">Freight Forwarder</option>
                  <option value="Customs Broker">Customs Broker</option>
                  <option value="Logistics Provider">Logistics Provider</option>
                  <option value="Other">Other</option>
              	</select>

                {this.renderErrors()}

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

  renderPartnersForm() {
    return (
      <div>
        <p>
          Access information on duty rates, documentation and service providers
          for your export and import activities. Enter new markets and obtain
          new suppliers. Get expert assistance handling international trade for
          you and get quotes on shipping rates.
        </p>

        <div>
          <form
            ref="form"
            onSubmit={this.handleSubmit}
            action="//trade-iq.us14.list-manage.com/subscribe/post-json?u=57909444beb143f85de7388ed&id=d106957355&c=?"
            method="get"
            noValidate
          >
            <div className="o-layout">
              <div className="o-layout__item">
                <div><span>*</span> indicates required</div>

              	<label>Email Address  <span>*</span></label>
              	<input type="email" name="EMAIL" />
              </div>

              <div className="o-layout__item u-6-tablet">
              	<label>First Name  <span>*</span></label>
              	<input type="text" name="FNAME" />
              </div>

              <div className="o-layout__item u-6-tablet">
              	<label>Last Name  <span>*</span></label>
              	<input type="text" name="LNAME" />
              </div>

              <div className="o-layout__item">
              	<label>Company  <span>*</span></label>
              	<input type="text" name="COMPANY" />

              	<label>Country  <span>*</span></label>
              	<input type="text" name="COUNTRY" />

                <label>Industry <span>*</span></label>
              	<select name="INDUSTRY">
                  <option value=""></option>
                	<option value="1. Agriculture, Food and Beverages">1. Agriculture, Food and Beverages</option>
                  <option value="2. Mineral Products">2. Mineral Products</option>
                  <option value="3. Chemicals, Plastics and Rubber">3. Chemicals, Plastics and Rubber</option>
                  <option value="4.  Wood and Articles of Wood">4.  Wood and Articles of Wood</option>
                  <option value="5. Textile and Textile Products">5. Textile and Textile Products</option>
                  <option value="6. Footwear">6. Footwear</option>
                  <option value="7. Base Metals and Articles of Base Metal">7. Base Metals and Articles of Base Metal</option>
                  <option value="8. Machinery, Mechanical Appliances and Electrical Equipment">8. Machinery, Mechanical Appliances and Electrical Equipment</option>
                  <option value="9. Miscellaneous Manufactured Articles">9. Miscellaneous Manufactured Articles</option>
                  <option value="10. Other">10. Other</option>
              	</select>

                <label>Type  <span>*</span></label>
                <select name="TYPE">
                	<option value=""></option>
                	<option value="Export">Export</option>
                  <option value="Import">Import</option>
                  <option value="Export &amp; Import">Export &amp; Import</option>
                </select>

                <label>Number of Employees  <span>*</span></label>
                <select name="SIZE">
                	<option value=""></option>
                	<option value="Micro: 0-9">Micro: 0-9</option>
                  <option value="Small: 10-49">Small: 10-49</option>
                  <option value="Medium: 50-249">Medium: 50-249</option>
                  <option value="Large: 250+">Large: 250+</option>
                </select>

                {this.renderErrors()}

                <div className="u-hidden-visually" aria-hidden="true">
                  <input type="text" name="b_57909444beb143f85de7388ed_d106957355" tabIndex="-1" defaultValue="" />
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

  render() {
    if (this.props.form === 'partners') {
      return this.renderPartnersForm()
    } else {
      return this.renderSMEForm()
    }
  }
}
