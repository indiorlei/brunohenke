import React from "react"
import { Link } from "gatsby"

import Social from "../components/social"
import Bio from "../components/bio"
import About from "../components/about"

import "../styles/layout.scss"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const aboutPath = `${__PATH_PREFIX__}/about/`
  const aboutPath2 = `${__PATH_PREFIX__}/about`
  let header

  if (location.pathname === rootPath) {
    header = (
      <header className="header fixed">
        <Link to={`/about`}>About</Link>
        <Bio />
        <Social />
      </header>
    )
  } else if (location.pathname === aboutPath || location.pathname === aboutPath2) {
    header = (
      <header className="header fixed">
        <Link to={`/`}>Back</Link>
        <About />
        <Social />
      </header>
    )
  } else {
    header = (
      <header className="header fixed">
        <Link to={`/`}>Back</Link>
        <Social />
      </header>
    )
  }
  
  return (
    <div>
      {header}
      <main>{children}</main>
      <footer style={{ display: `none` }}>
        © {new Date().getFullYear()}, Built  <a href="https://indiorlei.github.io/">Indiorlei</a>
      </footer>
    </div>
  )
}

export default Layout
