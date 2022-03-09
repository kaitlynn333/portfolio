import React from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiReplit } from 'react-icons/si'

function Navbar() {
  return (
  <>
  <style jsx>{styles}</style>
    <nav>
       <div className="logo"></div>
       <div className="links">

          <Link href="/">
            <a>home</a>
          </Link>

          <Link href="/about">
            <a>about</a> 
          </Link>

       </div>
       <div className="social">
         <a href="https://github.com/kaitlynn333">
           <FaGithub />
         </a>
         
         <a href="https://www.linkedin.com/in/kaitlynn-farkas-206704211/">
           <FaLinkedin />
         </a>

         <a href="https://replit.com/@kat3337">
           <SiReplit />
         </a>

         </div> 
    </nav>
  </>
  )
}

const styles = css`
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 20px;
}
.logo {
  margin-right: auto;
}
.links {
  display: flex;
  margin-right: 40px;
}
a {
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  transition: all 0.2s;
  vertical-align: middle;
  color: rgba(255, 255, 255, 0.8);
}
a:hover {
  color: rgba(255, 255, 255, 1);
  transform: scale(1.04);
}
.social a {
  font-size: 28px;
}
`

export default Navbar