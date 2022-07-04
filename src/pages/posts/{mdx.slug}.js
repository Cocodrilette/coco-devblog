import * as React from 'react'
import Layout from '../../components/layout'
import {
  blogPostInfo,
  blogPostPubInfo,
  blogPostAuthor,
  blogPostDescription,
  blogPostContent,
  blogPostFooter
} from '../../comp-styles/main-style.module.css'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <div className={blogPostInfo}>
        <p className={blogPostPubInfo}>
          Posted on {data.mdx.frontmatter.datePublished} by
          <span className={blogPostAuthor}>
            <Link to={data.mdx.frontmatter.link}>
              {data.mdx.frontmatter.author}</Link></span>
        </p>
        <p className={blogPostDescription}>
          {data.mdx.frontmatter.description}
        </p>
      </div>
      <div className={blogPostContent}>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </div>
      <div className={blogPostFooter}>
        Last update on {data.mdx.parent.modifiedTime}
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      datePublished(formatString: "MMMM D, YYYY")
      name
      description
      author
      link
    }
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

`

export default BlogPost