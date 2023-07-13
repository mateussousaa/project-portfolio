import { styled } from "styled-components"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

export default function IntroduceMe() {
  return (
    <Section id="introduce">
      <div>IntroduceMe</div>
    </Section>
  )
}
