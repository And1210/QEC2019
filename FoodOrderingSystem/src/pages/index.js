import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/login"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Run your kitchen with Buffalo</h1>
      <div>
        <p>
          The creators of Buffalo believe that every pantry contains the start of a great meal.

            Join us today and make something extraordinary.
        </p>
      </div>
      <Login />
      <br/>
      <br/>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/*<Image />*/}
    </div>
    <Link to="/FoodInput/">Go to page 2</Link>
    <br/>
    <Link to="/Account/">Create Account</Link>
  </Layout>
)

export default IndexPage
