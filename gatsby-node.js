const path = require('path')

module.exports.createPages = async ({ graphql, actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query{
            allContentfulBlogPost{
                edges {
                    node {
                        slug
                    }
                }
            }
        }    
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    // ================== PORTFOLIO ================== //

    const portfolioTemplate = path.resolve('./src/templates/portfolio.js')
    const portfolioRes = await graphql(`
        query{
            allContentfulPortfolioItem{
                edges {
                    node {
                        slug
                    }
                }
            }
        }    
    `)

    portfolioRes.data.allContentfulPortfolioItem.edges.forEach((edge) => {
        createPage({
            component: portfolioTemplate,
            path: `/portfolio/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}

// module.exports.createPages = async ({ graphql, actions}) => {
//     const {createPages} = actions
//     const portfolioTemplate = path.resolve('./src/templates/portfolio.js')
//     const res = await graphql(`
//         query{
//             allContentfulPortfolioItem{
//                 edges {
//                     node {
//                         slug
//                     }
//                 }
//             }
//         }    
//     `)

//     res.data.allContentfulPortfolioItem.edges.forEach((edge) => {
//         createPages({
//             component: portfolioTemplate,
//             path: `/portfolio/${edge.node.slug}`,
//             context: {
//                 slug: edge.node.slug
//             }
//         })
//     })
// }
