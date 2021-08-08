module.exports = {
  siteMetadata: {
    title: `김진규 블로그`,
    description: ``,
    author: `김진규`,
    url: "https://redpeanut.github.io",
    social: {
      email: "jkkim80.dev@gmail.com",
      //twitterUsername: "",
      githubUsername: "RedPeanut",
    },
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-images',
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`
      },
    },
  ],
}
