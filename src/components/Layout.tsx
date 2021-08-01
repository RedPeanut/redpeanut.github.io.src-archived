import React, { ReactNode } from "react"
import { Helmet } from 'react-helmet'
import "../../static/css/style.css"
import Icon from "./Icon"
import ICONS from "../utils/icons"
import { Link } from "gatsby"

interface LayoutProps {
  className: string
  children?: ReactNode
}

export default function Layout({ className, children }) {
  return (
    <div className={className}>
      <Helmet>
        <title>김진규블로그</title>
        {/* <link rel="stylesheet" href={style} /> */}
      </Helmet>
      {/* <Styled.GlobalStyle /> */}
      { children }
    </div>
  )
}

export function PlainLayout({ children }) {
  return (
    <Layout>
      { children }
    </Layout>
  )
}

interface HomeLayoutProps {
  index: number
  children?: ReactNode
}

export function HomeLayout({ index = 0, children }: HomeLayoutProps) {

  //const [selected, setSelected] = useState(0)
  console.log("index = " + index)

  return (
    <Layout className="home layout">
        <header>
          <div className="wrap">
            <h1>
              <a className="" href="/">김진규블로그</a>
            </h1>
            <nav>
              <ul>
                <li><Link to="/about" className={index == 0 ? 'active' : ''}>About</Link></li>
                <li><Link to="/blog" className={index == 1 ? 'active' : ''}>Blog</Link></li>
                <li><Link to="/gallery" className={index == 2 ? 'active' : ''}>Gallery</Link></li>
                {/* <li><a href="/about" className={index == 0 ? 'active' : ''}>About</a></li>
                <li><a href="/blog" className={index == 1 ? 'active' : ''}>Blog</a></li>
                <li><a href="/gallery" className={index == 2 ? 'active' : ''}>Gallery</a></li> */}
              </ul>
            </nav>
            <ul className="contacts">
              <li>
                <a href="mailto:zamong99@gmail.com" target="_blank">
                  <Icon name="email" icon={ICONS['EMAIL']}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/RedPeanut/RedPeanut.github.io.src" target="_blank">
                  <Icon name="github" icon={ICONS['GITHUB']}/>
                </a>
              </li>
            </ul>
          </div>
        </header>
        { children }
        <footer>
          <div className="wrap">
            <p>© 2021 by 김진규. All right reserved.</p>
          </div>
        </footer>
    </Layout>
  )
}


