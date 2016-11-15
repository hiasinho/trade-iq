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
                  <a href="#0" className="site-nav__link site-nav__close">Close</a>
                </li>
                <li className="c-site-nav__item"><Link to={prefixLink('/html/')}>Services</Link></li>
                <li className="c-site-nav__item"><Link to={prefixLink('/html/')}>About</Link></li>
                <li className="c-site-nav__item"><Link to={prefixLink('/html/')}>Join</Link></li>
              </ul>
            </nav>

            <div className="c-page-head__brand u-margin-top-huge">
              <div className="c-logo c-logo--light">
                <div className="c-logo__image"></div>
                <div className="c-logo__text">
                  Trade<span>IQ</span>
                </div>
              </div>
            </div>

            <h1 className="c-page-head__title">Simplifying Global Trade for SMEs</h1>
            <h3 className="c-page-head__subtitle u-margin-bottom-huge">Some super cool slogan to rule the trading world, bro</h3>
          </div>
        </header>
        {this.props.children}
        <footer className="c-page-foot u-theme-color--water">
          <div className="c-page-foot__copyright">
            &copy; 2016 TradeIQ. All rights reserved.
          </div>
        </footer>
      </div>
    )
  },
})
