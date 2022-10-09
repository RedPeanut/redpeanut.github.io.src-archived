module.exports = {
  siteMetadata: {
    title: `김진규 블로그`,
    description: ``,
    author: `김진규`,
    url: "https://redpeanut.github.io",
    social: {
      email: "zamong99@gmail.com",
      //twitterUsername: "",
      githubUsername: "RedPeanut",
    },
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 726,
              showCaptions: true,
            },
          },
          /*{
            resolve: `gatsby-remark-autolink-headers`, // 헤딩 링크 추가. presimjs 앞에 와야함(https://github.com/gatsbyjs/gatsby/issues/5764)
            options: {
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            },
          },*/
          {
            resolve: `gatsby-remark-prismjs`, // 코드 하일라이팅
            options: {
              //showLineNumbers: false,
              //noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts/`
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "gallery",
        path: `${__dirname}/gallery/`
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
