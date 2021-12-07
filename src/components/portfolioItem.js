import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"
import TechDisplay from "../components/techDisplay"

const PortfolioItem = (props) => {
    const data = useStaticQuery(graphql `query {
        allFile( filter: { extension: { eq: "jpg" } }) 
        {
          edges {
            node {
              publicURL
            }
          }
        }
      }`
    )

    return ( 
      <>
        <AniLink paintDrip hex='#274125' duration={.5} to={'/portfolio/'+props.item.slug}>
          <div className={LayoutStyles.ItemContainer}>
            <img src={props.item.heroImage.file.url} alt={ 'Screenshot of the website: ' + props.item.title }/>
            <div>
              <h3>{props.item.title}</h3>
                <TechDisplay item={props.item}/>
            </div>
          </div>
        </AniLink>
        </>
    )
};

export default PortfolioItem;