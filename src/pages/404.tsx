import React from "react"

import { Seo } from "../components/Seo"
import { Layout } from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="404: Page non trouvée"
      description="Rien à voir ici... Pour le moment"
    />
    <h1>NOT FOUND</h1>
    <p>Rien à voir ici. Pour le moment...</p>
  </Layout>
)

export default NotFoundPage
