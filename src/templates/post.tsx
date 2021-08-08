
function Post({ data: { markdownRemark } }) {

  const {
    frontmatter: { title, summary, date },
    timeToRead,
    html,
  } = markdownRemark
  
  return (
    <>
      <h1>{title}</h1>
      <p>{date} • {timeToRead}분</p>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
