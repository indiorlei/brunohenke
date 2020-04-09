import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/social.scss"

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            email
            linkedin
            instagram
            savee
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <nav className="nav">
        <ul className="social-menu">
        <li><a href={`mailto:${social.email}`}>Email</a></li>
        <li><a href={`${social.linkedin}`} target="_blank" rel="noopener noreferrer">Linkedin</a></li>
        <li><a href={`${social.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href={`${social.savee}`} target="_blank" rel="noopener noreferrer">Savee</a></li>
        </ul>
    </nav>
  )
}

export default Social
