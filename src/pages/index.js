import React from "react"
import { Link } from "gatsby"
import layout from "../components/layout"
import About from "./about"
import Layout from "../components/layout"

const Index = () => {
  return (
    <Layout>
      <h1>kunjan Index</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default Index

//makimg simple links with pagesfolder activate pages/About, blog,contactc,index,   componnets/Footer, header
