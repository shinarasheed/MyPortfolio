import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  description,
  title,
  banner,
  stack,
  githuburl,
  applicationurl,
  index,
}) => {
  return (
    <article className="project">
      <img src={banner.fluid.src} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p className="project-desc">{description.description}</p>
        <div className="project-stack">
          {stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={githuburl}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={githuburl}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
