//see eg 1, header.js and gatsby-config.js

import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className = {headerStyles.header}>
     <h1><Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link></h1>
      <nav>
        <ul className = {headerStyles.navlist}>
          <li>
            <Link  className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className = {headerStyles.navItem}  to="/about">About</Link>
          </li>
          <li>
            <Link className = {headerStyles.navItem}  to="/blog">Blog</Link>
          </li>

          <li>
            <Link  className = {headerStyles.navItem} to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header