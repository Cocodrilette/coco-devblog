import * as React from 'react'
import Layout from '../components/layout'
import { pageList, listItem } from '../comp-styles/main-style.module.css'
import { graphql } from 'gatsby'

const PostsPage = ({ data }) => {
    // I think prop only called data, I tried others variables names
    // and throw me and error
    // CHECK IT OUT
    const postsList = data.allFile.nodes.map(post => {
        return (
            <ul className={pageList}>
                <li className={listItem} key={post.name}>
                    🦎 {post.name}
                </li>
            </ul>
        )
    });

    return (
        <React.StrictMode>
            <Layout
                pageTitle="Posts">
                {postsList}
            </Layout>
        </React.StrictMode>
    )
}

export const postData = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
            nodes {
                name
            }
        }
    }
`
// Here we are not using the useStaticQuery becauses it is for 
// make a query inside of a component
// By this way we can pass the data into a page component as a prop

export default PostsPage