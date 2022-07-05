module.exports = {
  siteMetadata: {
    title: "UnderB",
    author: "Juan Fernando Cogollo Doria",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              linkImagesToOriginal: true,
              showCaptions: true,
              markdownCaptions: true,
              backgroundColor: 'none',
              loading: 'lazy',
              decoding: 'async',
              wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
        ],
      },
    },
    // This plugin used a dependecies that used a outdate version of React
    // This could cause erros
    // Until this not happened, we are using it.
    {
      // This add the 'posts' folder to the data layer
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        // The name option in the configuration object gets 
        // set to the sourceInstanceName field for each file. 
        // This comes in handy when you want to source files 
        // from multiple folders. By giving each folder a different 
        // name option, you can build GraphQL queries that filter 
        // down to only a particular folder.
        path: `${__dirname}/posts`
        // __dirname is a variable from Node.js that stores 
        // the absolute path for the directory that contains 
        // the file currently being run.
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-transformer-sharp",
  ],
}



