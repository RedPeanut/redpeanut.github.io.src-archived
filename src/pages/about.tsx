import React from "react"
import { HomeLayout } from "../components/Layout"

export default function index() {
  return (
    <HomeLayout index={0}>
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
    </HomeLayout>
  )
}