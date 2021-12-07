import React from 'react'
import { graphql, Link} from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from "../components/head"

import blogStyles from '../pages/blog.module.scss'
import layoutStyles from '../components/layout.module.scss'

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}){
        contentful_id
        id
        title
        publishedDate (formatString: "D MMMM YYYY")
        body {
            raw
        }
        image {
            contentful_id
            id
            title
            description
            file {
                url
                }
            }
        }
    allContentfulAsset
        {
        edges {
            node {
                file {
                    url
                  }		
                contentful_id
                id
                spaceId
                title
                description
                node_locale
                }
            }
        }
}`

const Blog = (props) => {

    const dtrOptions = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
              const x = props.data.allContentfulAsset.edges.filter( AssetNode => {
                  if (node.data.target.sys.id === AssetNode.node.contentful_id){
                      return true
                  }
              })

              return (
                <div className={blogStyles.assetContainer}>
                    <img className={blogStyles.assetImage} src={x[0].node.file.url}/>
                    <label className={blogStyles.imageDescription}>{x[0].node.description}</label>
                </div>
                )
            },
        },
      }

    // ================================================================================= //

    return(
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <div className={blogStyles.blogHeadingContainer}>
                <h1 className={blogStyles.blogTitle}>{props.data.contentfulBlogPost.title}</h1>
                <h3 className={blogStyles.blogDate}>{props.data.contentfulBlogPost.publishedDate}</h3>
            </div>
            <img className={blogStyles.blogHeroImage} src={props.data.contentfulBlogPost.image.file.url}/>
            <div>
                {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), dtrOptions)}
            </div>
            <Link to={'/blog'}> 
                <button className={layoutStyles.backButton}>
                Go back
                </button>
            </Link>
        </Layout>
    )
}

export default Blog
