import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Head from 'next/head'

const IndexPage = () => (
  <>
    <Wrapper>
      <div style={{width: '100%', height: '100vh', background: 'red'}}></div>
      <div style={{width: '100%', height: '100vh', background: 'blue'}}></div>
      <div style={{width: '100%', height: '100vh', background: 'green'}}></div>
    </Wrapper>
  </>
)

export default IndexPage







{/* <Layout title="Home | Next.js + TypeScript Example">
  //   <h1>Hello Next.js 👋</h1>
  //   <p>
  //     <Link href="/about">
  //       <a>About</a>
  //     </Link>
  //   </p>
  // </Layout> */}