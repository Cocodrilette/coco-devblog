import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import * as React from 'react'
import {
  postFooter,
  infoSection,
  postContent,
  infoSectionPara,
} from '../../../styles/markdown.module.css'
import {
  divider,
  dividerSm,
  mediaSection,
  mediaCaption,
} from '../../../styles/main.module.css'

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

const BlogPost = ({ data }) => {

  const image = getImage(data.mdx.frontmatter.post_image)
  // getImage is a helper function that takes in a File node or 
  // an ImageSharp node and returns the gatsbyImageData object 
  // for that node. 

  return (
    // The comments below are for resalting the data rendered in the blog post
    // So, if you see a comment that means that you can change this data
    <Layout pageTitle={data.mdx.frontmatter.name}>

      <section className={infoSection}>
        <p className={infoSectionPara}>
          Posted on {' '}
          {/*  */}
          {data.mdx.frontmatter.datePublished} {' '}
          {/*  */}
          by {' '}
          {/*  */}
            <a href={data.mdx.frontmatter.link} title="Go to your social">
              {data.mdx.frontmatter.author}
              {/*  */}
            </a>
        </p>
      </section>

      <figure className={mediaSection}>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.post_image_alt}
        />
        <figcaption className={mediaCaption}>
          Photo Credit:{" "}
          <a
            href={data.mdx.frontmatter.post_image_credit_link}
            title="Go to the image source">
            {data.mdx.frontmatter.post_image_credit_text}
          </a>
        </figcaption>
      </figure>

      <div className={divider}></div>
      
      <article className={postContent}>
        <p>{data.mdx.frontmatter.description}</p>
      <div className={dividerSm}></div>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
        <div className={postFooter}>
          Last update on {data.mdx.parent.modifiedTime}
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost