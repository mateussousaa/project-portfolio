import { styled } from "styled-components"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

export default function Contact() {
  return (
    <Section id="contact">
      <div>Contact</div>
    </Section>
  )
}
