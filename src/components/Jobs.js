import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const {
    allContentfulExperience: { nodes: jobs },
  } = useStaticQuery(graphql`
    {
      allContentfulExperience(sort: { fields: startDate, order: ASC }) {
        nodes {
          company
          position
          description
          startDate(formatString: "MMMM YYYY")
          endDate(formatString: "MMMM YYYY")
          contentful_id
        }
      }
    }
  `)

  const [value, setValue] = useState(0)

  const { company, position, description, startDate, endDate } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={item.contentful_id}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }} className="job-date">
              {startDate} -
            </p>
            {endDate !== null ? (
              <p className="job-date">{endDate}</p>
            ) : (
              <p>present</p>
            )}
          </div>

          {description.map((desc, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{desc}</p>
              </div>
            )
          })}
        </article>
      </div>

      <Link to="/aboutme" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
