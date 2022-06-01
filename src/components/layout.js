import * as React from 'react'
import Example from '../components/navbar'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children, }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <Example></Example>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout