import { styled } from "styled-components"

const Section = styled.div`
  background: rebeccapurple;
  height: 100vh;
  scroll-snap-align: center;
`

export default function Hero() {
  return (
    <Section>
      <div>Hero</div>
    </Section>
  )
}
