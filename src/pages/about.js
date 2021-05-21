import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({
  data: {
    allContentfulAbout: { nodes },
  },
}) => {
  const { title, description, stack, image } = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{description.description}</p>
            <div className="about-stack">
              {stack.map((stack, index) => (
                <span key={index}>{stack}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
export const query = graphql`
  {
    allContentfulAbout {
      nodes {
        title
        description {
          description
        }
        stack
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
