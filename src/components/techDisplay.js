import React from 'react'

import LayoutStyles from '../components/layout.module.scss'

function TechDisplay(props) {
    return (
        <div className={LayoutStyles.techContainer}>
        {props.item.link.tech.map((item) => {
            return <h6 className={LayoutStyles.tech} id={item}>{item}</h6>
          })}
      </div>
    )
}

export default TechDisplay
