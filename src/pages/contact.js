import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xyyleayp" method="POST">
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                style={{ resize: "none" }}
                name="message"
                className="form-control"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
