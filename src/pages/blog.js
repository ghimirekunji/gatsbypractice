

// These is for contenful blog post rendering  ****************************************

import React from "react"
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogpost ( sort: { fields: publishedDate, order: DESC } ) {
        edges {
            node {
                title
                slug
                image {
                  file {
                    url
                  }
                }
                publishedDate(formatString:"MMMM Do, YYYY")
            }
        }
    }
}
  `)

console.log(data)

  return (
      
          <Layout>
          <h1>Blog</h1>
         <ol className={blogStyles.posts}>
           {data.allContentfulBlogpost.edges.map((edge, index) => {
              return (
                <li className={blogStyles.post} key = {'edge'+index}>
                  <Link  to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <img src={edge.node.image.file.url}/>
                  <p>{edge.node.publishedDate}</p>
                  </Link>
                </li>
              )
           })}
         </ol>

         </Layout>
      
  )
}


export default BlogPage














// These is for from gatsby API markdown ****************************************


// import React from "react"
// import Layout from '../components/layout'
// import { graphql, useStaticQuery, Link } from "gatsby"
// import blogStyles from './blog.module.scss'

// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//   query {
//     allMarkdownRemark{
//       edges{
//         node{
//           frontmatter{
//             title
//             date
//           }
//           fields{
//             slug
//           }
//         }
//       }
//     }
//   }
//   `)

// console.log(data)

//   return (
      
//           <Layout>
//           <h1>Blog</h1>
//          <ol className={blogStyles.posts}>
//            {data.allMarkdownRemark.edges.map((edge) => {
//               return (
//                 <li className={blogStyles.post}>
//                   <Link  to={`/blog/${edge.node.fields.slug}`}>
//                   <h2>{edge.node.frontmatter.title}</h2>
//                   <p>{edge.node.frontmatter.date}</p>
//                   </Link>
//                 </li>
//               )
//            })}
//          </ol>

//          </Layout>
      
//   )
// }


// export default BlogPage