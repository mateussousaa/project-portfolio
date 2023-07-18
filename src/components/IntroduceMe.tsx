import { styled } from "styled-components"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 24px;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`

const Text = styled.p`
  font-size: 24px;
  text-indent: 16px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`

export default function IntroduceMe() {
  return (
    <Section id="introduce">
      <Container>
      <Title>Sobre mim</Title>
      <Text>
        Sou Mateus Angelino de Sousa, um programador iniciante apaixonado por resolver problemas usando tecnologia. Sou altamente motivado, pró-ativo e capaz de trabalhar em equipe. Com habilidades em comunicação eficaz, pensamento analítico, trabalho em equipe, adaptabilidade e resolução de problemas, estou ansioso para expandir minhas habilidades e contribuir para uma empresa que valorize o aprendizado e o desenvolvimento contínuo.
      </Text>
      <Text>
        Se você procura um desenvolvedor Full Stack dedicado, com uma sólida formação acadêmica e um conjunto abrangente de habilidades técnicas, estou pronto para enfrentar desafios e contribuir para o sucesso de sua empresa. Entre em contato para explorarmos oportunidades de colaboração e crescimento mútuo.
      </Text>
      </Container>
    </Section>
  )
}
