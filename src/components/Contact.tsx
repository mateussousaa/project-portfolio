import { styled } from "styled-components"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`

const SocialList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 20px;
`

const ListItem = styled.li`
  width: 100%;
  max-width: 400px;
  color: black;
  text-align: center;
  background-color: white;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  gap: 16px;
  color: black;
  text-decoration: none;
`

const Title = styled.h1`
  font-size: 74px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Title>
          Contato
        </Title>
        <SocialList>
          <ListItem>
            <Link href="https://github.com/mateussousaa" target="_blank">
            <FaGithub size="24"/>
            GitHub
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mateus-angelino-de-sousa/" target="_blank">
            <FaLinkedin size="24"/>
            Linkedin
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/mateussousapk/" target="_blank">
            <FaInstagram size="24"/>
            Instagram
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/mateussousaPK" target="_blank">
            <FaTwitter size="24"/>
            Twitter
            </Link>
          </ListItem>
        </SocialList>
      </Container>
    </Section>
  )
}
