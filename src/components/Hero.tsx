import { styled } from "styled-components"
import { Navbar } from "./Navbar"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1024px){
    flex-direction: column;
    align-items: center;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px){
    flex: 1;
    order: 1;
    text-align: center;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 74px;
  @media (max-width: 768px){
    font-size: 40px;
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
  @media (max-width: 400px){
    display: none;
  }
`

const Subtitle = styled.h2`
  color: var(--color02);
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.button`
  background-color: var(--color02);
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
  position: relative;

  @media (max-width: 1024px){
    width: 100%;
    flex: 1;
    order: 0;
  }

  @media (max-height: 768px){
    display: none;
  }
`

const HeroImg = styled.img`
  width: 100%;
  max-width: 420px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media (max-width: 768px){
    max-width: 240px;
  }
`

export default function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Pensar. Fazer. Resolver.</Title>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>Criador da minha própria sorte</Subtitle>
            </WhatWeDo>
            <Desc>
              Transformo ideias em experiências digitais encantadoras!
            </Desc>
            <Button>Leia mais</Button>
        </Left>
        <Right>
          <HeroImg src="./img/hero.jpeg"/>
        </Right>
      </Container>
    </Section>
  )
}
