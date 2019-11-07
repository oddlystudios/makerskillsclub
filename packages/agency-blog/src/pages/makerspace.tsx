import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Makerspace from "../containers/Makerspace"

type MakerspacePageProps = {}

const MakerspacePage: React.FunctionComponent<MakerspacePageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Makerspace"
        description="Toronto makerspace training skills education"
      />

      <Makerspace />
    </Layout>
  )
}

export default MakerspacePage
