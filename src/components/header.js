import React from 'react'
import { Link } from 'gatsby'
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
                    {titleData.site.siteMetadata.title}
                </Link>
            </div>
        </header>
    )
}


export default Header