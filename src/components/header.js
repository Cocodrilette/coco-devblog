import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { siteHeader } from '../comp-styles/main-style.module.css'
import { useStaticQuery, graphql } from 'gatsby'

function Header() {
    const titleData = useStaticQuery(graphql`
        query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `)

    return (
        <header className={siteHeader}>
            <div>
                <Link to="/" title='Go to home'>
                    <StaticImage
                        src='../images/logo.png'
                        alt='A very cool cyberpunk dude with a very fancy glasses sitting on the floor using a very cool computer'
                    />
                    {titleData.site.siteMetadata.title}
                </Link>
            </div>
        </header>
    )
}


export default Header