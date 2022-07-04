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
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    // Class prefix for <pre> tags containing syntax highlighting;
                    // defaults to 'language-' (e.g. <pre class="language-js">).
                    // If your site loads Prism into the browser at runtime,
                    // (e.g. for use with libraries like react-live),
                    // you may use this to prevent Prism from re-processing syntax.
                    // This is an uncommon use-case though;
                    // If you're unsure, it's best to use the default value.
                    classPrefix: "language-",
                    // This is used to allow setting a language for inline code
                    // (i.e. single backticks) by creating a separator.
                    // This separator is a string and will do no white-space
                    // stripping.
                    // A suggested value for English speakers is the non-ascii
                    // character '›'.
                    inlineCodeMarker: null,
                    // This lets you set up language aliases.  For example,
                    // setting this to '{ sh: "bash" }' will let you use
                    // the language "sh" which will highlight using the
                    // bash highlighter.
                    aliases: {},
                    // This toggles the display of line numbers globally alongside the code.
                    // To use it, add the following line in gatsby-browser.js
                    // right after importing the prism color scheme:
                    //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                    // Defaults to false.
                    // If you wish to only show line numbers on certain code blocks,
                    // leave false and use the {numberLines: true} syntax below
                    showLineNumbers: false,
                    // If setting this to true, the parser won't handle and highlight inline
                    // code used in markdown i.e. single backtick code like `this`.
                    noInlineHighlight: false,
                    // This adds a new language definition to Prism or extend an already
                    // existing language definition. More details on this option can be
                    // found under the header "Add new language definition or extend an
                    // existing language" below.
                    languageExtensions: [
                      {
                        language: "superscript",
                        extend: "javascript",
                        definition: {
                          superscript_types: /(SuperType)/,
                        },
                        insertBefore: {
                          function: {
                            superscript_keywords: /(superif|superelse)/,
                          },
                        },
                      },
                    ],
                    // Customize the prompt used in shell output
                    // Values below are default
                    prompt: {
                      user: "root",
                      host: "localhost",
                      global: false,
                    },
                    // By default the HTML entities <>&'" are escaped.
                    // Add additional HTML escapes by providing a mapping
                    // of HTML entities and their escape value IE: { '}': '&#123;' }
                    escapeEntities: {},
                  },
                },
              ],
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
  ],
}



