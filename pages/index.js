import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

import { map } from 'lodash'

import services from '../data/services'
import benefits from '../data/benefits'
import { logo } from '../images'

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

  renderBenefits() {
    return map(benefits, (data, i) => {
      return (
        <div key={i} className="o-layout__item u-5-tablet u-4-desktop">
          <div className="c-service">
            <img src={data.icon} className="c-service__icon" />
            <p className="c-service__body">{data.body}</p>
          </div>
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
      <section className="c-area u-theme--tint" id="why">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-10-desktop u-text--center">
                <h1>Why TradeIQ?</h1>
                <p className="u-text--center">
                  TradeIQ’s BetterTradeTM offers visibility and access to
                  up-to-date information on international trade regulation in a
                  single platform for you to:
                </p>
              </div>
              {this.renderBenefits()}
            </div>
          </div>
        </section>

        <section className="c-area u-theme--highlight">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center" id="join">
              <div className="o-layout__item u-text--center">
                <h1>Join Us now – It‘s FREE</h1>
              </div>
              <div className="o-layout__item u-6-tablet u-5-desktop">
                <a onClick={this.handleShowForm.bind(this, 'partners')} className="c-btn c-btn--block c-btn--large c-btn--secondary u-margin-bottom">
                  I am an<br/>Exporter or Importer
                </a>
              </div>
              <div className="o-layout__item u-6-tablet u-5-desktop">
                <a onClick={this.handleShowForm.bind(this, 'sme')} className="c-btn c-btn--block c-btn--large c-btn--secondary u-margin-bottom">
                  I am a<br/>Logistics Provider or Customs Agent
                </a>
              </div>

              {this.renderForm()}
            </div>
          </div>
        </section>

        <section className="c-area u-theme--tint" id="services">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-text--center">
                <h1 className="u-margin-bottom-large">Services </h1>
              </div>
              {this.renderServices()}
            </div>
          </div>
        </section>

        <section className="c-area u-theme--highlight" id="about">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center o-layout--middle">
              <div className="o-layout__item u-padding-right u-4-tablet u-3-desktop u-hidden-tablet">
                <img src={logo} />
              </div>
              <div className="o-layout__item u-8-tablet u-8-desktop">
                <h1>About TradeIQ</h1>
                <p>
                  TradeIQ is a web-based platform for international trade that
                  provides all the necessary information for companies to export
                  and import to and from any country in the world. It walks
                  users from definition and classification of tariff codes, to
                  the calculation of duties and filling of formats to
                  nationalize the merchandize in the country of destination and
                  obtain benefits from trade agreements. It provides connection
                  with shipping companies, customs agents and insurance
                  companies all around the world. With TradeIQ companies can
                  automate and digitalize manual and paper-based processes to
                  streamline their global trade operations. Our goal is to
                  simplify, organize and distribute all the information to make
                  the export the import process more efficient, convenient and
                  less costly for everyone.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
    )
  }
}
