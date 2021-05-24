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
      file(relativePath: { eq: "hero-img.png" }) {
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
            <h4>I’m a full stack developer, specialized in the </h4>
            <h4> development of web and mobile applications</h4>
            <h4>using React.js, Next.js, Gatsby.js, Node.js,</h4>
            <h4>React Native &amp; more</h4>
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
