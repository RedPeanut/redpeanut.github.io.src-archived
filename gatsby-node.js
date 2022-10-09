const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

function getSlug(node, getNode) {
  // 파일이름이 yyyy-mm-dd로 시작하면 이를 사용한다.
  // yyyy-mm-dd-jekyll-to-gatsby.md -> yyyy-mm-dd-jekyll-to-gatsby
  const base = path.parse(node.fileAbsolutePath).name // "2020-07-22-jekyll-to-gatsby"
  const ptn = /^(\d\d\d\d)-(\d\d)-(\d\d)-(.+)/
  const hasDate = ptn.test(base)
  if (hasDate) {
    let slug = base.replace(ptn, "/$1/$2/$3/$4")
    if (node.frontmatter.category) {
      slug = `/${node.frontmatter.category}${slug}.html`
    }
    return slug
  }

  // 기본값
  return createFilePath({ node, getNode })
}

function getDate(node, getNode) {
  // 문서에 date가 있을 경우 이것을 사용
  if (node.frontmatter.date) {
    return new Date(node.frontmatter.date)
  }

  // 파일이름이 yyyy-mm-dd로 시작하면 이를 사용한다.
  // yyyy-mm-dd-jekyll-to-gatsby.md -> yyyy-mm-dd-jekyll-to-gatsby
  const base = path.parse(node.fileAbsolutePath).name // "2020-07-22-jekyll-to-gatsby"
  const ptn = /^(\d\d\d\d)-(\d\d)-(\d\d)-(.+)/
  const hasDate = ptn.test(base)
  if (hasDate) {
    return new Date(base.substr(0, 10))
  }

  return ""
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  //console.log("" + node.internal.type)
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = getSlug(node, getNode)
    createNodeField({ name: `slug`, value: slug, node })
    //const date = getDate(node, getNode)
    //createNodeField({ name: `date`, value: date, node })
    if (!slug /* || !date */) {
      throw "No slug!"
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    //const posts = result.data.allMarkdownRemark.edges
    const nodes = result.data.allMarkdownRemark.edges.map(e => e.node)

    nodes.forEach(({fields:{slug}}, index) => {
      createPage({
        path: slug,
        component: path.resolve(__dirname, "src", "templates", "post.tsx"),
        context: {
          slug,
          previous: index === nodes.length - 1 ? null : nodes[index + 1],
          next: index === 0 ? null : nodes[index - 1],
        },
      })
    })
  })

}