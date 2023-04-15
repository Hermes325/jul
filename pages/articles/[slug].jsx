import React from 'react'
import { StructuredText, Image as DatoCMSImage } from "react-datocms";
import { getArticleDetails, getArticlesPaths } from '@/lib/datocms'

// articles/[slug].js
export default function Article({ article }) {

  console.log('Article >>', article)
  return <>
    <main>
      <h1>{article.title}</h1>
      <DatoCMSImage data={article.mainPicture.responsiveImage} />
      <StructuredText data={article.articleText} />
    </main>
  </>
}

// Generates `/article/1` and `/article/2`
export async function getStaticPaths() {
  const articles = await getArticlesPaths()
  const paths = articles.map(x => ({ params: { slug: x.slug } }))
  return { paths, fallback: false, }
}

export async function getStaticProps(context) {
  const article = await getArticleDetails(context.params.slug)
  return {
    props: { article },
  }
}
