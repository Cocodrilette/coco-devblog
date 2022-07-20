import * as React from 'react'
import Layout from '../components/layout'
import {
    divider
} from '../../styles/main.module.css'
import {
    specialUL,
} from '../../styles/resources.module.css'

const AboutPage = () => {
    return (
        <React.StrictMode>
            <Layout
                pageTitle="Resources">
                <p>
                    I have a lot of resource that I have amassed over the time. Down below you can find a link to my library on Google Drive, and some others recomendations divided by category.
                </p>
                <div className={divider}></div>
                <ul className={specialUL}>
                    <li><a href='https://drive.google.com/drive/folders/1otOO28ZKdApAtxJyNeKXHbSKBKeMGASR?usp=sharing' title='Go to Google Drive Directory'>
                    Library</a>
                        {' '}Here you can find documents about Law (Derecho), Finances, Computation, Universal Literature, Politics Science, Economics, and some Programming languajes handbooks (about Python, PHP, Javascript, Node.js and more) <em>-credits to the author-</em>.
                    </li>
                </ul>
            </Layout>
        </React.StrictMode>
    )
}

export default AboutPage