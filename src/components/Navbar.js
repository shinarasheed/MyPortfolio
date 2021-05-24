import React from "react"
import logo from "../assets/gravity.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img style={{ width: "40px" }} src={logo} alt="logo" />
          </Link>
          <button onClick={toggleSidebar} type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"> </PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
