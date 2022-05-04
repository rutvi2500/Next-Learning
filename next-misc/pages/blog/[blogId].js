import Head from 'next/head'
import React from 'react'

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>
        Id: {process.env.NEXT_PUBLIC_ID}
      </h1>
    </>
  )
}

export default Blog

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogId: '1' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  console.log(`connecting to database with username: ${user} and password: ${password}`);
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description'
    }
  }
}