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
  return (
    <li className="item">
      <Link to={node.fields.slug} className="">
        <h2 className="title">{node.frontmatter.title}</h2>
        <p className="meta"></p>
        {node.excerpt && (<p className="summary">
          {node.excerpt}
        </p>)}
      </Link>
    </li>
  )
}

export default PostListItem
