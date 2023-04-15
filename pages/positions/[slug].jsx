import React from 'react'
import { StructuredText } from "react-datocms"
import { getPositionDetails, getPositionPaths } from '@/lib/datocms'

// positions/[slug]
export default function Position({ position }) {

  console.log('Position >>', position)
  return (<main>
    <h1>{position.positionName}</h1>
    <StructuredText data={position.positionDescription} />
  </main>)
}

// Generates `/positions/1` and `/positions/2`
export async function getStaticPaths() {
  const positions = await getPositionPaths()
  const paths = positions.map(x => ({ params: { slug: x.positionSlug } }))
  return { paths, fallback: false, }
}

export async function getStaticProps(context) {
  const position = await getPositionDetails(context.params.slug)
  return {
    props: { position },
  }
}
