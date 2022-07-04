module.exports = {
  siteMetadata: {
    title: "Cocodrilette Devblog",
    author: "Juan Fernando Cogollo Doria",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
      }
    }
  ],
}



