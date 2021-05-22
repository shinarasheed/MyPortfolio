import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const indexPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}

export default indexPage

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        contentful_id
        title
        description {
          description
        }
        githuburl
        applicationurl
        stack
        banner {
          fluid(maxWidth: 2000) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        createdAt
      }
    }
  }
`
