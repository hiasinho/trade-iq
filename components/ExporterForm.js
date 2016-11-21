import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { ajax } from 'jquery'
import serialize from 'form-serialize'
import classNames from 'classnames'
import ReactGA from 'react-ga'
import { map, merge } from 'lodash'

export default class ExporterForm extends Component {

  constructor(params) {
    super(params)

    this.state = {
      hasErrors: false,
      message: '',
      sending: false
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    const formData = serialize(this.refs.form, { hash: true })

    ReactGA.set({ email: formData.EMAIL })

    ReactGA.event({
      category: 'Join Form',
      action: 'Submit'
    })

    if (formData.EMAIL) {
      window.mixpanel.identify(formData.EMAIL)
    }

    this.setState({
      sending: true
    })

    ajax({
      type: this.refs.form.method,
      url: this.refs.form.action,
      data: formData,
      cache: false,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      error: (err) => {
        this.setState({
          hasErrors: true,
          message: 'Could not connect to the registration server. Please try again later.',
          sending: false
        })
        ReactGA.exception({
          description: 'Could not connect to the registration server. Please try again later.',
          fatal: true
        })
      },
      success: (data) => {
        if (data.result != "success") {
          this.setState({
            hasErrors: true,
            message: data.msg,
            sending: false
          })

          ReactGA.event({
            category: 'Join Form',
            action: 'Success'
          })

          window.mixpanel.people.set({
            "$first_name": formData.FNAME,
            "$last_name": formData.LNAME,
            "$email": formData.EMAIL,
            "Company": formData.COMPANY
          })

          if (this.props.form === 'partners') {
            window.mixpanel.people.set({
              "Industry": formData.INDUSTRY,
              "Type": formData.TYPE,
              "Size": formData.SIZE
            })
          } else {
            window.mixpanel.people.set({
              "Type": formData.TYPE
            })
          }

          window.mixpanel.track(
            `Submit ${this.props.form} Form`
          )
        } else {
          this.setState({
            hasErrors: false,
            message: data.msg,
            sending: false
          })

          ReactGA.event({
            category: 'Join Form',
            action: 'Error',
            label: data.msg
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

  renderBasicFields() {
    return (
      <div className="o-layout">
        <div className="o-layout__item">
          <label>Email Address  <span>*</span></label>
          <input type="email" name="EMAIL" disabled={this.state.sending} />
        </div>

        <div className="o-layout__item u-6-tablet">
          <label>First Name  <span>*</span></label>
          <input type="text" name="FNAME" disabled={this.state.sending} />
        </div>

        <div className="o-layout__item u-6-tablet">
          <label>Last Name  <span>*</span></label>
          <input type="text" name="LNAME" disabled={this.state.sending} />
        </div>

        <div className="o-layout__item">
          <label>Company  <span>*</span></label>
          <input type="text" name="COMPANY" disabled={this.state.sending} />

          <label>Country  <span>*</span></label>
          <input type="text" name="COUNTRY" disabled={this.state.sending} />
        </div>
      </div>
    )
  }

  renderFormFooter() {
    return (
      <div className="o-layout">
        <div className="o-layout__item">
          <div className="o-layout o-layout--middle">
            <div className="o-layout__item u-8-tablet">
              <div className="u-text--centerl">
                <span className="">
                  By clicking Join, you agree to our <Link to={prefixLink('/terms/')}>Terms of Use</Link> and <Link to={prefixLink('/privacy/')}>Privacy Policy</Link>.
                </span>
              </div>
            </div>
            <div className="o-layout__item u-4-tablet">
              <div className="u-text--right">
                <input type="submit" value="Join" name="subscribe" className="c-btn c-btn--primary" disabled={this.state.sending} />
              </div>
            </div>
          </div>
        </div>
      </div>
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
            {this.renderBasicFields()}

            <div className="o-layout">
              <div className="o-layout__item">
              	<label>Type of Service <span>*</span></label>
              	<select name="TYPE" disabled={this.state.sending}>
                	<option value=""></option>
                  <option value="Customs Agent">Customs Agent</option>
                  <option value="Logistics Provider">Logistics Provider</option>
                  <option value="Customs Broker">Customs Broker</option>
                  <option value="Freight Forwarder">Freight Forwarder</option>
                  <option value="Other">Other</option>
              	</select>

                {this.renderErrors()}

                <div><span>*</span> indicates required</div>

                <div className="u-hidden-visually" aria-hidden="true">
                  <input type="text" name="b_57909444beb143f85de7388ed_4db8bd8bed" tabIndex="-1" defaultValue="" />
                </div>
              </div>
            </div>

            {this.renderFormFooter()}
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
          new suppliers. Get expert assistance handling international trade and
          get quotes on shipping lines.
        </p>

        <div>
          <form
            ref="form"
            onSubmit={this.handleSubmit}
            action="//trade-iq.us14.list-manage.com/subscribe/post-json?u=57909444beb143f85de7388ed&id=d106957355&c=?"
            method="get"
            noValidate
          >
            {this.renderBasicFields()}

            <div className="o-layout">
              <div className="o-layout__item">
                <label>Industry <span>*</span></label>
              	<select name="INDUSTRY" disabled={this.state.sending}>
                  <option value=""></option>
                  <option value="Agriculture, Food and Beverages">Agriculture, Food and Beverages</option>
                  <option value="Mineral Products">Mineral Products</option>
                  <option value="Chemicals, Plastics and Rubber">Chemicals, Plastics and Rubber</option>
                  <option value="Wood, Paper and Articles thereof">Wood, Paper and Articles thereof</option>
                  <option value="Textile and Textile Products">Textile and Textile Products</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Base Metals and Articles of Base Metal">Base Metals and Articles of Base Metal</option>
                  <option value="Machinery, Mechanical Appliances and Electrical Equipment">Machinery, Mechanical Appliances and Electrical Equipment</option>
                  <option value="Consumer Goods">Consumer Goods</option>
                  <option value="Other">Other</option>
              	</select>

                <label>Type  <span>*</span></label>
                <select name="TYPE" disabled={this.state.sending}>
                	<option value=""></option>
                	<option value="Export">Export</option>
                  <option value="Import">Import</option>
                  <option value="Export &amp; Import">Export &amp; Import</option>
                </select>

                <label>Number of Employees  <span>*</span></label>
                <select name="SIZE" disabled={this.state.sending}>
                	<option value=""></option>
                	<option value="Micro: 0-9">Micro: 0-9</option>
                  <option value="Small: 10-49">Small: 10-49</option>
                  <option value="Medium: 50-249">Medium: 50-249</option>
                  <option value="Large: 250+">Large: 250+</option>
                </select>

                {this.renderErrors()}

                <div><span>*</span> required</div>

                <div className="u-hidden-visually" aria-hidden="true">
                  <input type="text" name="b_57909444beb143f85de7388ed_d106957355" tabIndex="-1" defaultValue="" />
                </div>
              </div>
            </div>

            {this.renderFormFooter()}
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
