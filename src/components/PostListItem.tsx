import React from 'react'
import { Link } from 'gatsby'

interface Fields {
  slug: string
}

interface Frontmatter {
  title: string
  description: string
  tags?: string[]
  category?: string
  link?: string
}

interface Node {
  id: string
  html: string
  excerpt: string
  fields: Fields
  frontmatter: Frontmatter
}

interface PostListItemProps {
  node: Node
}

function PostListItem({
  node
}: PostListItemProps) {

  if(node.frontmatter.link != null && node.frontmatter.link != "") {
    return (
      <li className="item">
        <a href={node.frontmatter.link} className="" target="_blank">
          <h2 className="title">{node.frontmatter.title}
            <span className="newwindow"></span>
          </h2>
        </a>
      </li>
    )
  } else {
    return (
      <li className="item">
        <a href={node.fields.slug} className="">
          <h2 className="title">{node.frontmatter.title}</h2>
          {/* <p className="meta"></p> */}
          {
            node.excerpt && (
              <p className="summary">
                {node.excerpt}
              </p>
            )
          }
        </a>
      </li>
    )
  }
}

export default PostListItem
