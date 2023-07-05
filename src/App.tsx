import { styled } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import IntroduceMe from "./components/IntroduceMe"
import Works from "./components/Works"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  return (
  <Container>
    <Hero />
    <IntroduceMe />
    <Works />
    <Contact />
  </Container>
  )
}

export default App
