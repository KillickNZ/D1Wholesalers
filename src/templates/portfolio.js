import React from 'react'
import { Link, graphql, useStaticQuery  } from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from "../components/head"
import TechDisplay from '../components/techDisplay'

import portfolioStyles from '../pages/portfolio.module.scss'
import layoutStyles from '../components/layout.module.scss'

export const query = graphql `query ($slug: String!) {
    contentfulPortfolioItem (slug : {eq: $slug}) {
         title
         contentful_id
         id
         url
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
   ` 

const Portfolio = (props) => {

    const item = props.data.contentfulPortfolioItem
    return(
        <Layout>
            <Head title={item.title}/>
            <h1 className={portfolioStyles.portfolioHeader}>{item.title}</h1>
            <div className={portfolioStyles.portfolioContainer}>
              <a href={item.url}>
                <img className={portfolioStyles.portfolioImage} src={item.heroImage.file.url}/>
              </a>
              <div className={portfolioStyles.rightContent}>
                <div>
                  <h2>{item.title}</h2>
                  <h3>{item.publishedDate}</h3>
                  <div>{documentToReactComponents(JSON.parse(item.description.raw))}</div>
                </div>
                <div>
                  <h3>Tech Stack:</h3>
                  <TechDisplay item={item}/>
                </div>
              </div>
            </div>
            <Link to={'/'}>
              <button className={layoutStyles.backButton}>
                Go back
              </button>
            </Link>
           
        </Layout>
    )
}
export default Portfolio

