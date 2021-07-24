import React from "react"
import { Helmet } from 'react-helmet'
import Header from "./Header"
import style from "../../static/css/style.css"
import * as Styled from "./Layout.styled"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>김진규블로그</title>
        <link rel="stylesheet" href={style} />
      </Helmet>
      {/* <Styled.GlobalStyle /> */}
      { children }
    </>
  )
}

export function PlainLayout({ children }) {
  return (
    <Layout>
      { children }
    </Layout>
  )
}

export function HomeLayout({ children }) {
  return (
    <Layout>
      <header>
          <h1>
            <a className="" href="/">김진규블로그</a>
          </h1>
          <nav>
            <ul>
              <li><a href=""><i></i>About</a></li>
              <li><a href=""><i></i>Blog</a></li>
              <li><a href=""><i></i>Gallery</a></li>
            </ul>
          </nav>
      </header>
      <section className="career">
        <div>
          <h1>경력</h1>
          <div className="item">
            <b>디큐</b><span className="period">2017.02. - 현재</span>
            <span className="position">웹개발</span>
          </div>
          <div className="item">
            <b>필아이티</b><span className="period">2013.02. - 2017.02.</span>
            <span className="position">앱개발</span>
          </div>
          <div className="item">
            <b>인스모바일</b><span className="period">2008.12. - 2012.12.</span>
            <span className="position">앱개발</span>
          </div>
          <div className="item">
            <b>마루인포</b><span className="period">2008.03. - 2008.10.</span>
            <span className="position">앱개발</span>
          </div>
        </div>
        <div>
          <h1>학력</h1>
          <div className="item">
            <b>건국대학교</b><span className="period">1999. - 2006.</span>
            <span className="position">전기공학과 학사</span>
          </div>
        </div>
      </section>
      <section className="interest">
        <h1>관심분야</h1>
        <div className="line">
          Keyword, Keyword, Keyword, Keyword, Keyword
        </div>
      </section>
      <footer>
        © 2021 by 김진규. All right reserved.
      </footer>
    </Layout>
  )
}