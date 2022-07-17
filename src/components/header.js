import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { headerContent } from '../../styles/header.module.css'

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
        <header>
            <div className={headerContent}>
                <Link to="/" title='Go to home'>
                    /{titleData.site.siteMetadata.title}
                </Link>
            </div>
        </header>
    )
}


export default Header