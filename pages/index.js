import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import ReactGA from 'react-ga'
import classNames from 'classnames'
import { config } from 'config'

import { map, bind } from 'lodash'

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

  handleShowPartnerForm = () => {
    this.setState({
      showForm: 'partners'
    })
    
    ReactGA.event({
      category: 'Join Form',
      action: `Show Partners`,
      label: 'partners'
    })
  }

  handleShowSMEForm = () => {
    this.setState({
      showForm: 'sme'
    })

    ReactGA.event({
      category: 'Join Form',
      action: `Show Partners`,
      label: 'sme'
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

  renderJoin() {
    const classes = classNames('c-btn c-btn--block c-btn--large c-btn--secondary u-margin-bottom')
    const classPartners = classNames(classes, {
      'c-btn--active': (this.state.showForm === 'partners')
    })
    const classSME = classNames(classes, {
      'c-btn--active': (this.state.showForm === 'sme')
    })

    return (
      <div className="o-layout o-layout--center" id="join">
        <div className="o-layout__item u-text--center">
          <h1>Join Us – It‘s FREE</h1>
        </div>
        <div className="o-layout__item u-6-tablet u-6-desktop">
          <a onClick={this.handleShowPartnerForm} className={classPartners}>
            I am an<br/>Exporter or Importer
          </a>
        </div>
        <div className="o-layout__item u-6-tablet u-6-desktop">
          <a onClick={this.handleShowSMEForm} className={classSME}>
            I am a<br/>Logistics Provider or Customs Agent
          </a>
        </div>

        {this.renderForm()}
      </div>
    )
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
                  TradeIQ’s offers visibility and access to
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
            {this.renderJoin()}
          </div>
        </section>

        <section className="c-area u-theme--tint" id="services">
          <div className="o-wrapper">
            <div className="o-layout o-layout--center">
              <div className="o-layout__item u-text--center">
                <h1 className="">Services </h1>
                <p>Global trade management and compliance-as-a-Service </p>
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
                  and import to and from any country in the world.
                </p>
                <p>
                  It guides
                  users from definition and classification of tariff codes, to
                  the calculation of duties and filling of formats to
                  nationalize the merchandize in the country of destination and
                  obtain benefits from trade agreements. It provides connection
                  with shipping companies, customs agents and insurance
                  companies all around the world. With TradeIQ companies can
                  automate and digitalize manual and paper-based processes to
                  streamline their global trade operations.
                </p>
                <p>
                  Our vision is to
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
