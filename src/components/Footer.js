import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  // © 2021 John Smilga. All rights reserved. Built withGatsby
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          &copy; {new Date().getFullYear()} <span>shinarasheed</span>. All
          rights reserved. Built with{" "}
          <span style={{ color: "red", fontSize: "1.5rem" }}>&#9829; </span>{" "}
          <span>
            with{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gatsbyjs.com/"
            >
              gatsby
            </a>
          </span>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
