const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogpost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogpost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}








//This was used for creating dynamic markdown blog template **************************
// const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//     const {createNodeField } = actions
//     if (node.internal.type==='MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath,'.md')
//         // console.log('sssssadcccccccc', slug)
//         // console.log(JSON.stringify(node,undefined, 4))
//         createNodeField({
//            node,
//            name:'slug',
//            value:slug
//         })
//     }

//   }

// module.exports.createPages = async({ graphql, actions }) => {
// const { createPage } = actions
// const blogTemplate = path.resolve('./src/templates/blog.js')
// const res = await graphql( `
//    query {
//         allMarkdownRemark{
//           edges{
//             node{

//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `)
// res.data.allMarkdownRemark.edges.forEach((edge )=> {
//     createPage({
//         component:blogTemplate ,
//         path:`/blog/${edge.node.fields.slug}`,
//         context:{
//             slug:edge.node.fields.slug
//         }
//     })
// })

// }
