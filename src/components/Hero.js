import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "shinanew.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Shina</h1>
            <h4>I’m a Full Stack, JAMSTACK developer </h4>
            <h4>specialized in the development of web</h4>
            <h4>and mobile applications using React.js,</h4>
            <h4> Next.js, Gatsby.js, Node.js, React Native</h4>
            <h4>&amp; more</h4>
            <Link to="/aboutme" className="btn">
              Find Out More
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
