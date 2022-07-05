import * as React from "react"
import {
  mainContainer,
  mainTitle,
  mainContent,
} from '../comp-styles/main-style.module.css'
import Navbar from './navbar'
import Header from './header'
import { useStaticQuery, graphql } from "gatsby"

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
      <Header></Header>
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