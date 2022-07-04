import * as React from 'react'
import Layout from '../components/layout'
import {
    postArticle,
    listItem,
    postListName,
    postDate,
    listAuthor,
    listPostDescription,
    postInfo
} from '../comp-styles/main-style.module.css'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PostsPage = ({ data }) => {
    // I think prop only called data, I tried others variables names
    // and throw me and error
    // CHECK IT OUT
    const postsList = data.allMdx.nodes.map(post => {
        return (
            <article className={postArticle} key={post.id}>
                <div className={listItem}>
                    <span className={postDate}>
                        {post.frontmatter.datePublished}
                    </span>
                    <h3 className={postListName}>
                        {post.frontmatter.name}
                    </h3>
                </div>
                <div className={postInfo}>
                    <p className={listAuthor}>
                        Posted by {post.frontmatter.author}
                    </p>
                    <p className={listPostDescription}>
                        {post.frontmatter.description}
                    </p>
                </div>
            </article>
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

// Here we are not using useStaticQuery, becasuse this method is used to
// make  queries insede of a component
// here we are making a (Gatsby) page component query, so, we need to doing this
// in this way, and pass the data as a prop
export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
            nodes {
              frontmatter {
                author
                datePublished(formatString: "MMMM D, YYYY")
                description
                name
              }
              id
              body
              parent {
                ... on File {
                  id
                  name
                  modifiedTime(formatString: "MMMM D, YYYY")
                }
              }
            }
        }
    }
`
// Here we are not using the useStaticQuery becauses it is for 
// make a query inside of a component
// By this way we can pass the data into a page component as a prop

export default PostsPage