import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"

const indexPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data
  return (
    <Layout>
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
        title
        githuburl
        applicationurl
        stack
        description {
          description
        }
        banner {
          fluid {
            src
          }
        }
      }
    }
  }
`
