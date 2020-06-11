import React, { FC } from "react"
import { Helmet } from "react-helmet"

interface Meta {
  name: string
  content: string
}

export interface SeoProps {
  title: string
  description: string
  lang?: "fr" | "en"
  meta?: Meta[]
}

export const Seo: FC<SeoProps> = ({
  description,
  title,
  lang = "fr",
  meta = [],
}) => {
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
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
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
