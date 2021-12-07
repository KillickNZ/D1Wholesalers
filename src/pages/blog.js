import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import blogStyles from './blog.module.scss'
import Head from "../components/head"

const BlogPage = () => {
    const data = useStaticQuery(graphql `query {
        allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC }) 
        {
            edges {
                node {
                title 
                slug
                publishedDate (formatString: "D MMMM YYYY")
                    }
                }
            }
        }  
        ` )
        
    return (
        <Layout>
            <Head title="Blog"/>
            <h1 id="homeTitle">Blog</h1>
            <ol className={blogStyles.posts}>
                {
                    data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <AniLink paintDrip hex='#274125' duration={.5}  to={edge.node.slug}>
                                    <h1 >{edge.node.title}</h1>
                                    <p>{edge.node.publishedDate}</p>
                                </AniLink>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    );
};

export default BlogPage;