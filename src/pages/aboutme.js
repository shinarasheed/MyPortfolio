import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SeoComponent from "../components/SEO"

const About = ({
  data: {
    allContentfulAbout: { nodes },
  },
}) => {
  const { title, stack, image } = nodes[0]
  return (
    <Layout>
      <SeoComponent title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            {/* <p>{description.description}</p> */}
            <div>
              <p>
                I am a Full-Stack Web Application developer with a passion for
                web technologies. I write robust, clean, re-usable and
                maintainable code and create fast, user friendly and scalable
                web applications.
              </p>
              <p>
                This also means I strive to follow best practices and use
                industry-standard tools, including <span>git-workflow</span>,
                Test Driven Development <span> (Mocha, Chai, Sinon),</span>{" "}
                Continous Integration{" "}
                <span>
                  (Travis-CI, AWS codepipeline, Coveralls, Codeclimate, Hound),
                </span>
                linting <span>(ESLint, Prettier),</span> package management{" "}
                <span>(Yarn, NPM)</span>, and modern build tools{" "}
                <span>(Webpack, Babel)</span> . I also love working with
                anything <span>JAMSTACK</span>.
              </p>
              <p>
                I have 4 years experience during which I have work for a software development academy
                as an instructor, a website development company, a sports tech startup and as a Freelancer
                for clients in the Oil and Gas, Marine Security and Financial Sectors. 
              </p>

              <p>
                I also enjoy learning lots of stuff, I am currently learning{" "}
                <span>PYTHON</span> and plans to checkout <span>FLUTTER</span>{" "}
                and <span>Golang </span>
                in the nearest future
              </p>

              <p>
                When not working on a project or thinking about programming, I'm
                most likely seeing a movie, jogging, watching Chelsea F.C play
                football, or spending time with family and friends.
              </p>
            </div>
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
