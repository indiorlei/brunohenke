import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      site {
        siteMetadata {
          social {
            email
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <section className="about content">
        <p>
          I am a Brazilian designer, living in Dublin, working at Wt.ag. I have been living in Dublin to study english and learn more about design with people to other place then me.
        </p>
        <p>
          I started designing three and a haft years ago, and this make me really excited. I believe that just hard work is not enough, but if you get a hard work and love what you do, you can do and be whatever you want.
        </p>
        <p>
          As a good Brazilian guy, I love soccer and sports, in my free time, I spent a lot of my time practice some kind of sports, like running, soccer, american football and others.
        </p>
        <p>
          I really like make new friends, if you would like say hi, contact me in <a href={`mailto:${social.email}`}>{social.email}</a>
        </p>
      </section>
  )
}

export default About
