import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


const Head = ({ title }) => {
    const data = useStaticQuery(graphql `
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

        return (
            <>
                <Helmet>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet"/>
                </Helmet>
                <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
            </>
        )
    }

export default Head