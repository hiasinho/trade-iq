import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

import { map } from 'lodash'

import services from '../data/services'

import ExporterForm from '../components/ExporterForm'

export default class Index extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      showForm: false
    }
  }

  handleShowForm(name) {
    this.setState({
      showForm: name
    })
  }

  renderForm() {
    if (this.state.showForm) {
      return (
        <div className="o-layout__item u-10-desktop">
          <div className="o-box o-paint-bg--light-gray">
            <ExporterForm form={this.state.showForm} />
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  renderService(data) {
    return (
      <div className="c-service">
        <img src={data.icon} className="c-service__icon" />
        <h4 className="c-service__title">{data.title}</h4>
        <p className="c-service__body">{data.body}</p>
      </div>
    )
  }

  renderServices() {
    return map(services, (item, i) => {
      return (
        <div key={i} className="o-layout__item u-5-tablet u-4-desktop">
          {this.renderService(item)}
        </div>
      )
    })
  }

  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Simplifying Global Trade for SMEs"},
            {"name": "keywords", "content": "trade, import, export, SME, tariff code, logistics, forms, duties"},
          ]}
        />
        <section className="c-area u-theme--highlight">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-10-desktop">
                <p className="u-h4 u-text--center">TradeIQ is a platform that provides you with all the information, tools and expert support that you need to manage your export and import processes more easily.</p>
              </div>
            </div>
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-text--center">
                <h2>Join Us now – It‘s FREE</h2>
              </div>
              <div className="o-layout__item u-6-tablet u-5-desktop">
                <a onClick={this.handleShowForm.bind(this, 'export')} className="c-btn c-btn--block c-btn--large c-btn--secondary u-margin-bottom">
                  I am an<br/>Exporter or Importer
                </a>
              </div>
              <div className="o-layout__item u-6-tablet u-5-desktop">
                <a onClick={this.handleShowForm.bind(this, 'provider')} className="c-btn c-btn--block c-btn--large c-btn--secondary u-margin-bottom">
                  I am a<br/>Logistics Provider or Customs Agent
                </a>
              </div>

              {this.renderForm()}
            </div>
          </div>
        </section>

        <section className="c-area u-theme--tint">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-text--center">
                <h2>Global Trade Management for SMEs  Why TradeIQ?</h2>
              </div>
              {this.renderServices()}
            </div>
          </div>
        </section>

        <section className="c-area u-theme--highlight">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-6">
                <h2>About TradeIQ</h2>
                <p>
                  TradeIQ is a platform that provides you with all the information, tools and expert support that you need to manage your export and import processes more easily.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
    )
  }
}
