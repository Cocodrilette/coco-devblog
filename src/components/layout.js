import React from "react"
import { mainContainer, mainTitle, mainContent } from '../comp-styles/main-style.module.css'
import Navbar from '../components/navbar' 

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
            <Navbar></Navbar>
        </div>
    )
}

export default Layout