// //**********************to render only title and date body rendering is below*****************

// import React from 'react';
// import {graphql} from 'gatsby'

// import Layout from '../components/layout'
// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlogpost(slug: { eq: $slug }) {
//       title
//       publishedDate(formatString: "MMMM Do, YYYY")

//     }
//   }
// `
// //rendering in UI
// const Blog = (props) => {
//     return (
//         <Layout>
//            <h1>{props.data.contentfulBlogpost.title}</h1>
//            <p>{props.data.contentfulBlogpost.publishedDate}</p>
//         </Layout>
//     )
// }

// export default Blog

// **********************rendering body *****************













import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//grabbing title, date, body
import Layout from "../components/layout"
import { node } from "prop-types"
export const query = graphql`
  query($slug: String!) {
    contentfulBlogpost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      image {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`
//rendering in UI

// {documentToReactComponents((props.data.contentfulBlogPost.body.json))}
// with these we should be able to see body json in UI  {documentToReactComponents((props.data.contentfulBlogPost.body.json))}
const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  // console.log(node)
  return (
    <Layout>
      <h1>{props.data.contentfulBlogpost.title}</h1>
      <p>{props.data.contentfulBlogpost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogpost.body.json,
        options
      )}
      {/* <img src={props.data.contentfulBlogpost.image.file.url}/> */}
    </Layout>
  )
}

export default Blog
