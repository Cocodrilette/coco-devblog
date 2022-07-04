import * as React from 'react'
import Layout from '../components/layout'
import { contentParagraph } from '../comp-styles/main-style.module.css'

const AboutPage = () => {
    return (
        <React.StrictMode>
            <Layout
            pageTitle="About">
            <p className={contentParagraph}>
                Labore dolor excepteur proident enim. Nisi amet in elit commodo irure dolor veniam sint non ut. Amet dolore aute cillum proident. Commodo incididunt anim reprehenderit quis laboris sint ex est eu proident. In eu nisi aliqua ea sint exercitation. Quis tempor consequat occaecat irure reprehenderit.
            </p>
        </Layout>
        </React.StrictMode>
    )
}

export default AboutPage