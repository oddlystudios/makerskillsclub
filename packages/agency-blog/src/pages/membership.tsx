import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Membership from "../containers/Membership"

type MembershipPageProps = {}

const MembershipPage: React.FunctionComponent<MembershipPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Membership"
        description="Borrow and share tools in Toronto lending library makerspace."
      />

      <Membership />
    </Layout>
  )
}

export default MembershipPage
