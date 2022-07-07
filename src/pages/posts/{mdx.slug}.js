import * as React from 'react'
import Layout from '../../components/layout'
import {
  blogPostInfo,
  blogPostPubInfo,
  blogPostAuthor,
  blogPostDescription,
  blogPostContent,
  blogPostFooter,
  blogPostFigCaption,
  divider
} from '../../comp-styles/main-style.module.css'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data }) => {

  const image = getImage(data.mdx.frontmatter.post_image)
  // getImage is a helper function that takes in a File node or 
  // an ImageSharp node and returns the gatsbyImageData object 
  // for that node. 

  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <div className={blogPostInfo}>
        <p className={blogPostPubInfo}>
          Posted on {data.mdx.frontmatter.datePublished} by
          <span className={blogPostAuthor}>
            <a href={data.mdx.frontmatter.link} title="Go to Instagram">
              {data.mdx.frontmatter.author}</a></span>
        </p>
      </div>
      <figure>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.post_image_alt}
        />
        <figcaption className={blogPostFigCaption}>
          Photo Credit:{" "}
          <a
            href={data.mdx.frontmatter.post_image_credit_link}
            title="Go to the image source">
            {data.mdx.frontmatter.post_image_credit_text}
          </a>
        </figcaption>
      </figure>
      <div className={divider}></div>
      <p className={blogPostDescription}>
        {data.mdx.frontmatter.description}
      </p>
      <div className={divider}></div>
      <article className={blogPostContent}>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </article>
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
        post_image_alt
        post_image_credit_link
        post_image_credit_text
        post_image {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

export default BlogPost