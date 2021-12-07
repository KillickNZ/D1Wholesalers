
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const notFound = () => {
    return (
        <Layout>
        <Head title="404"/>
        <h1 id="homeTitle">
            Whoops. Something went wrong!
        </h1>
        <p><Link to="/">For time travel portal click here</Link></p>
        </Layout>
    )

}

export default notFound