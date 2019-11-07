import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "../../../../components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/redqinc/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/redqinc/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/redqinc",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/redqinc/",
    tooltip: "Linked In",
  },
]

interface MakerspaceProps {}

const Makerspace: React.FunctionComponent<MakerspaceProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>A Space for Every Maker</h2>
        <p>
          Our Makerspace at 192 Spadina Ave is an innovation and technology hub,
          designed to support a community of makers in their creative pursuits,
          passions or profession.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>Makerspace Membership</h2>
        <div>
          <p>Makerspace Membership is $77+HST/month. </p>

          <p>
            Storage, workshops and time on the CNC machine are separate. You can
            join our community, sign up and book time here.{" "}
          </p>

          <p>
            Please email us at Contact@IRBE.org to arrange a tour. You can also
            visit the space during our open free Community Nights, from 7:00pm
            to 10:00pm every Wednesday to see the space in action. No
            appointment necessary, just drop by!{" "}
          </p>

          <p>
            Please note, you need to take a woodshop certification course to use
            the woodshop during community night.
          </p>
        </div>
        <div>
          <h3>About Our Community</h3>
          <p>
            The Makerspace is a welcoming, positive place for artists, hobbyists
            and professionals from all backgrounds and experience levels. Join a
            friendly, knowledgeable, close-knit community of innovative Makers
            from across many disciplines! We are committed to developing our
            members’ contributions to the broader Maker movement and to
            providing high-quality learning opportunities with some of the best
            open-source technology available.
          </p>
        </div>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default Makerspace
