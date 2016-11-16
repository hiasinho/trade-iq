import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import logo from '../images/logo.svg'
import '../css/main'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <header className="c-page-head c-page-head--masthead u-theme-color--water">
          <div className="o-wrapper">
            <nav className="c-site-nav">
              <a href="#trigger:nav" className="c-site-nav__open"></a>
              <a className="c-site-nav__target" id="trigger:nav"></a>

              <ul className="c-site-nav__list">
                <li className="site-nav__item  site-nav__item--close">
                  <a href="#0" className="site-nav__link site-nav__close"></a>
                </li>
                <li className="c-site-nav__item"><a href="#why">Why TradeIQ?</a></li>
                <li className="c-site-nav__item"><a href="#join">Join</a></li>
                <li className="c-site-nav__item"><a href="#services">Services</a></li>
                <li className="c-site-nav__item"><a href="#about">About Us</a></li>
                <li className="c-site-nav__item"></li>
              </ul>
            </nav>

            <div className="c-page-head__brand u-padding-top-huge">
              <div className="c-logo c-logo--light">
                <div className="c-logo__image"></div>
                <div className="c-logo__text">
                  Trade<span>IQ</span>
                </div>
              </div>
            </div>

            <h1 className="c-page-head__title">Simplifying Global Trade for SMEs</h1>
            <h3 className="c-page-head__subtitle u-h5 u-margin-bottom-huge">
              Global trade compliance and management platform providing information, tools and expert assistance to manage export and import processes more easily and efficiently.
            </h3>
          </div>
        </header>
        {this.props.children}
        <footer className="c-page-foot u-theme-color--water">
          <div className="o-layout">
            <div className="o-layout__item u-6-tablet">
              <div className="c-page-foot__copyright">
                &copy; 2016 TradeIQ. All rights reserved.
              </div>
            </div>

            <div className="o-layout__item u-6-tablet">
              <div className="c-page-foot__nav">
                <Link to={prefixLink('/impressum/')}>Terms</Link>.
                <Link to={prefixLink('/impressum/')}>Privacy</Link>.
              </div>
            </div>
          </div>


        </footer>
      </div>
    )
  },
})
