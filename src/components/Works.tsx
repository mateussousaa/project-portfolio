import { styled } from "styled-components"
import Carousel from "./Carousel.tsx"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 24px;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 74px;
  padding: 64px 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`

export default function Works() {
  return (
    <Section id="works">
      <Container>
        <Title>Principais Projetos</Title>
        <Carousel />
      </Container>
    </Section>
  )
}
