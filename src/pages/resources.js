import * as React from 'react'
import Layout from '../components/layout'
import { contentParagraph, divider } from '../comp-styles/main-style.module.css'

const AboutPage = () => {
    return (
        <React.StrictMode>
            <Layout
                pageTitle="Resources">
                <p className={contentParagraph}>
                    I have a lot of resource that I have amassed over the time. Down below you can find a link to my library on Google Drive, and some others recomendations divided by category.
                </p>
                <div className={divider}></div>
                <ul>
                    <li><a href='https://drive.google.com/drive/folders/1otOO28ZKdApAtxJyNeKXHbSKBKeMGASR?usp=sharing' title='Go to Google Drive Directory'>Library.</a> Here you can find documents about Law (Derecho), Finances, Computation, Universal Literature, Politics Science, Economics, and some Programming languajes handbooks (about Python, PHP, Javascript, Node.js and more) <em>-credits to the author-</em>.</li>
                </ul>
            </Layout>
        </React.StrictMode>
    )
}

export default AboutPage