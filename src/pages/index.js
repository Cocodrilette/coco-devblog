// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import contentToParagraph from '../components/utils/contentToParagraph'
// Step 2: Define your component
const IndexPage = () => {
  const pageContent = [
    'Non minim amet aliquip sint consectetur magna. Amet enim aute proident occaecat incididunt irure. Ut do laboris irure mollit proident duis magna incididunt. Eiusmod consectetur duis ipsum ut eu aute anim mollit officia id dolore mollit ullamco qui. Incididunt fugiat irure consequat minim fugiat minim anim. Tempor aliqua reprehenderit veniam consectetur.',
    'Ut adipisicing voluptate magna commodo aliquip commodo duis nisi minim exercitation dolore. Ipsum nisi tempor dolore sint. Reprehenderit aute cupidatat aute ex Lorem labore veniam sint officia irure dolor cupidatat consectetur. Non dolor voluptate ad excepteur non veniam laborum nostrud.'

  ]
  return (
    <Layout 
    pageTitle="Home"
    pageContent={contentToParagraph(pageContent)}
    >
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
