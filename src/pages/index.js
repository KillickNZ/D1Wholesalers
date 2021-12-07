import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import PortfolioItem from '../components/portfolioItem'
import Layout from "../components/layout"
import Head from "../components/head"

import indexStyles from './index.module.scss'
import blogStyles from './blog.module.scss'

const IndexPage = () => {

  const contentfulData = useStaticQuery(graphql `query {
     allContentfulPortfolioItem ( sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          slug
          title
          contentful_id
          id
          link {
            id
            tech
            sys {
              type
            }
          }
          description {
            raw
          }
          heroImage {
            contentful_id
            id
            title
            description
            file {
              url
            }
          }
        }
      }
  }
  site {
    siteMetadata {
      title
      }
    }
  }
    ` )

  return (
    <Layout>
      <Head title="Home"/>
      <h1 id="homeTitle">Sebastian Chapman - Portfolio</h1>
      <div>
        <p>
          Kia Ora! My name is <span className={blogStyles.boldUnderline}>Sebastian Chapman</span>,
          I'm a Full-Stack Software Developer and Economist who's mad about riding his bike and building 
          thing that make the world a better place! Here are a few of the projects I've been dabbling in recently:
        </p>

        <div className={indexStyles.portfolioItems}>
                {
                    contentfulData.allContentfulPortfolioItem.edges.map((edge, key) => {
                      return <PortfolioItem key={key} index={key} item={edge.node}/>
                    })
                }
         </div>
      </div>
    </Layout>
  );
};

export default IndexPage;