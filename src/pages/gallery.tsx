import React from "react"
import { HomeLayout } from "../components/Layout"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import PostListItem from "../components/PostListItem"

export default function index({ data: { allMarkdownRemark: { edges } } }) {
  return (
    <HomeLayout index={2}>
      <div className="blog">
        <div className="wrap">
          <div className="left category list"></div>
          <div className="main post list">
            <ul>
              {
                edges.map((edge, index) => {
                  return (
                    <PostListItem
                      key={index}
                      node={edge.node}
                    />
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC },
      filter: {frontmatter: {category: {eq: "gallery"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200, format: PLAIN, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`
