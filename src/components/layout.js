import * as React from "react"
import {
  mainContainer,
  mainContent,
} from '../../styles/main.module.css'
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
      <Navbar></Navbar>
      <main className={mainContent}>
        <h1>
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  )
}

export default Layout