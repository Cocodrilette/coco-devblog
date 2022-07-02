// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { contentParagraph, contentImage } from '../comp-styles/main-style.module.css'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <StaticImage
        src='../images/cyberpunk-dude.jpg'
        alt='A very cool cyberpunk dude with a very fancy glasses sitting on the floor using a very cool computer'
        className={contentImage}
      />
      <p className={contentParagraph}>
        Labore dolor excepteur proident enim. Nisi amet in elit commodo irure dolor veniam sint non ut. Amet dolore aute cillum proident. Commodo incididunt anim reprehenderit quis laboris sint ex est eu proident. In eu nisi aliqua ea sint exercitation. Quis tempor consequat occaecat irure reprehenderit.
      </p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
