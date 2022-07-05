import * as React from "react"
import {
  siteHeader,
  mainContainer,
  mainTitle,
  mainContent,
  // headerLogo,
  themeToggle
} from '../comp-styles/main-style.module.css'
import Navbar from '../components/navbar'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'


const Layout = ({ pageTitle, children }) => {
  // This is a JavaScript technique called destructuring. 
  // It’s basically a shortcut for defining variables based on 
  // an object’s properties. 
  // It’s like saying, “Take the object that gets passed into this 
  // function, and unpack its pageTitle and pageContent properties into 
  // their own variables.”

  // Here we are using useStaticQuery because we are inside of a component
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
    <div className={mainContainer}>
      <title>{pageTitle + " - " + titleData.site.siteMetadata.title}</title>
      <header className={siteHeader}>
        <div>
          {/* <StaticImage
            src='../images/cocodrilette-logo.png'
            alt='A very cool cyberpunk dude with a very fancy glasses sitting on the floor using a very cool computer'
            className={headerLogo}
          >
          </StaticImage> */}
          {titleData.site.siteMetadata.title}
        </div>
        <div>
          <StaticImage
            src='../images/moon-svgrepo-com.svg'
            alt='Theme toggle icon'
            className={themeToggle}
          >
          </StaticImage>
        </div>
      </header>
      <main
        className={mainContent}>
        <h1 className={mainTitle}>
          {pageTitle}
        </h1>
        {children}
      </main>
      <Navbar></Navbar>
    </div>
  )
}

export default Layout