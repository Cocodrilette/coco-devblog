import React, { Children } from "react"
import { Link } from 'gatsby'
import { mainContainer, mainTitle, mainContent, navbar, navbarItem, navbarLinkText } from '../comp-styles/main-style.module.css'

const Layout = ({ pageTitle, pageContent }) => {
    // This is a JavaScript technique called destructuring. 
    // It’s basically a shortcut for defining variables based on 
    // an object’s properties. 
    // It’s like saying, “Take the object that gets passed into this 
    // function, and unpack its pageTitle and pageContent properties into 
    // their own variables.”
    return (
        <div
            className={mainContainer}>
            <title>{pageTitle}</title>
            <main
                className={mainContent}>
                <h1
                    className={mainTitle}
                >{pageTitle}</h1>
                {pageContent}
            </main>
            <nav
                className={navbar}>
                <li
                    className={navbarItem}>
                    {/* This Link is a custom Gatsby component */}
                    <Link to="/" className={navbarLinkText}>Home</Link></li>
                <li
                    className={navbarItem}>
                    <Link to="/about" className={navbarLinkText}>About</Link></li>
            </nav>
        </div>
    )
}

export default Layout