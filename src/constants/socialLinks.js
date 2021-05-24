import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://web.facebook.com/rasheed.shina.14",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/rasheedshina",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/iamshinarasheed",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/rasheedshina22",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        target="_blank"
        rel="noreferrer"
        href={link.url}
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

const socialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

export default socialLinks
