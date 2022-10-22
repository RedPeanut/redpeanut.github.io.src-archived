import React from 'react'
import { MainLayout } from "../components/Layout"
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        category
      }
    }
  }
`

export default function index({ data, pageContext }) {

  const { markdownRemark, gallery } = data
  const {
    frontmatter: { title, date, category },
    timeToRead,
    html,
  } = markdownRemark
  const { previous, next } = pageContext
  
  return (
    <MainLayout index={markdownRemark.frontmatter.category == 'gallery' ? 2 : 1}>
      <div className="blog">
        <div className="wrap">
          <div className="left category list"></div>
          <div className="main post read">
            <h1 className="title">{title}</h1>
            <p className="meta">{date} • {timeToRead}분</p>
            <div className="content markdown-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
