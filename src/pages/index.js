// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { contentParagraph, divider, blogPostFigCaption } from '../comp-styles/main-style.module.css'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <React.StrictMode>
      <Layout pageTitle="Home">
        <figure>
          <StaticImage
            src='../images/diane-picchiottino-FBPzc81dwDw-unsplash.jpg'
            alt='A very cool cyberpunk dude with a very fancy glasses sitting on the floor using a very cool computer'
          />
          <figcaption className={blogPostFigCaption}>
            Photo Credit:{" "}
            <a
              href='https://unsplash.com/es/@diane_soko'
              title="Go to the image source">
              Diane Picchiottino
            </a>
          </figcaption>
        </figure>
        <div className={divider}></div>
        <p className={contentParagraph}>
          Welcolme to <strong>UnderB</strong>, like Under Building. This is a site where you can read about of a variety of themes from programming, passing through law, and in fact, about many more things. You could even find tutorials and much more learning content in the <strong>RESOURCES</strong> section. But, before you enter this special place, I would like to tell you a some things.
        </p>
        <p className={contentParagraph}>
          This site is principally wrote in english, but it have some <strong>POST</strong> wrote in spanish too, you can indentify them because they will have the label <strong>[ES]</strong> at the beggining of the title. I hope to include more languages in the future. However, you can use the Google Translate or any of the available tools to translate the site on the fly (We recomend the <a href='https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=es' title='Go to the Chrome store'>Google Translate extention for Chrome</a>).
        </p>
        <p className={contentParagraph}>
          About the techs, this site was written in <a href='https://reactjs.org/' title='Go to the React site'>React</a> and it is using the <a href='https://www.gatsbyjs.com/' title='Go the the Gatsby site'>Gatsby</a> framework. As this is a open source project, you can find the code on the <strong>ABOUT</strong> section, and using it whatever you want.
        </p>
        <p className={contentParagraph}>
          Finally, I would like to say that this site is a work in progress, and I am working on it to make it better and more user friendly. If you have any suggestions or comments, please, don't hesitate to contact me. You can find  email in the <strong>ABOUT</strong> section too, or simply click <a href='mailto:orgunderb@gmail.com'>HERE</a>.
        </p>
        <p className={contentParagraph}>
          Thank you for your visit, and we hope you enjoy it!
        </p>
      </Layout>
    </React.StrictMode>
  )
}

// Step 3: Export your component
export default IndexPage
