import React, { FC, useMemo } from "react"
import Head from "next/head"

interface MetaProperty {
  property: string
  content: string
}

interface MetaName {
  name: string
  content: string
}

type Meta = MetaName | MetaProperty

export interface SeoProps {
  title: string
  description: string
  metas?: Meta[]
}

export const Seo: FC<SeoProps> = ({ description, title, metas: meta = [] }) => {
  const baseMetas: Meta[] = useMemo(
    () => [
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
      {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
      },
    ],
    []
  )

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {[...baseMetas, ...meta].map((meta, i: number) => (
        <meta key={i} {...meta} />
      ))}
    </Head>
  )
}
