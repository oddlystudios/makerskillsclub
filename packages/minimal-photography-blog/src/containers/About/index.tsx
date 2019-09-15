import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
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
    url: "https://www.facebook.com/oddlystudios/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/oddlytim/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/maker_skills",
    tooltip: "Twitter",
  },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
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
        <h2>About MakerSkills Club</h2>
        <p>
          MakerSkills Club is a place to find instruction, fun activities,
          professional development, and like-minded creative people to learn
          with.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>Who We Are</h2>
        <p>
          MakerSkills Club helps creative people find local clubs that will help
          them practice and develop their skills in both traditional and
          high-tech fields. We list and assist both free and paid clubs. Some
          are ongoing, others are for limited time or project-based.
        </p>
        <h2>Partners</h2>
        <h3>ProjectBoard</h3>
        <p>
          Engineering.com is a large online community for engineers and the
          engineering-minded. In Fall of 2019 we’ll be hosting all of our
          programs using ProjectBoard, their ideation platform, custom-made for
          exploring, developing and sharing ideas! You’ll be able to see updates
          from programs, get to know the mentors, and help us shape the
          experience. You can follow along online, or download either the
          Android or iOS apps to get notifications about activities.
        </p>
        <h3>OddlyStudios</h3>
        <p>
          Oddly, a well-known creative development partner for many global
          brands is the provider for much of the equipment that lets us teach
          tech-programs. Single-board computers, micro-controllers, motor
          drivers, networking equipment, and much of the audio-visual equipment
          in the space has been donated by them. We’re pleased to be
          well-equipped with the same gear they have used in their award-winning
          productions.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
