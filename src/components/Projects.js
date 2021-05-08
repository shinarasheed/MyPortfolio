import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Projects from "../components/Projects"
import Title from "../components/Title"
import Project from "../components/Project"

const ProjectsPage = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={index} index={index} {...project} />
        })}
      </div>

      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default ProjectsPage
