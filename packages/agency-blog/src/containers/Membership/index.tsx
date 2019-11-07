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
  ListWrapper,
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

interface MembershipProps {}

const Membership: React.FunctionComponent<MembershipProps> = props => {
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
        <h2>Start sharing. Start saving.</h2>
        <p>Become a member of the Toronto Tool Library & Sharing Depot.</p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>How to become a member</h2>
        <p>
          We have three membership options designed to work with your lifestyle.
          Select the one that’s best for you! Get access to one or all three of
          our locations based on the membership option selected below. Pay
          online and activate your membership in store. Happy sharing!
        </p>
        <p>
          Giving a membership as a gift? We’ve partnered with UnWrapIt to make
          the experience of giving a membership that much more memorable!
          UnWrapIt makes beautiful and customizable digital unwrapping
          experiences for intangible, experiential gifts. Learn more about how
          you can give a membership with a unique unwrapping experience.
        </p>
        <div>
          <h3>Basic Membership</h3>
          <h2>Ideal for occasional fixer</h2>
          <ListWrapper>
            <ul>
              <li>$55 per year +HST </li>
              <li>Access the Tool Library and Sharing Depot </li>
              <li>Additional Power Tool Fees* </li>
              <li>3-4 Day Loans </li>
              <li>Access One Location </li>
            </ul>
          </ListWrapper>
          <a href="#" target="_blank">
            <h3>Buy Membership</h3>
          </a>
        </div>
        <div>
          <h3>Twice The Fun Membership</h3>
          <h2>Ideal for super builder</h2>
          <ListWrapper>
            <ul>
              <li>$85 Per Year +HST Access Tool Library & Sharing Depot </li>
              <li>Additional Power Tool Fees* </li>
              <li>7 Day Loans </li>
              <li>Access All Locations </li>
            </ul>
          </ListWrapper>
          <a href="#" target="_blank">
            <h3>Buy Membership</h3>
          </a>
        </div>
        <div>
          <h3>High Five Membership</h3>
          <h2>Ideal for wonder maker </h2>
          <ListWrapper>
            <ul>
              <li>$110 Per Year +HST </li>
              <li>Access Tool Library and Sharing Depot </li>
              <li>No Additional Power Tool Fees </li>
              <li>14 Day Loans </li>
              <li>Access All Locations</li>
            </ul>
          </ListWrapper>
          <a href="#" target="_blank">
            <h3>Buy Membership</h3>
          </a>
        </div>
        <p>
          *Additional fees apply to battery powered, bench top, and high
          maintenance tools.
        </p>
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default Membership
