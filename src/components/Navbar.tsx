import { styled } from "styled-components"

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`
const Logo = styled.img`
  height: 80px;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  font-weight: 500;
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: var(--color02);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
`

const onClick = () => window.open('./curriculum/curriculo_portfolio.pdf', '_blank');

export const Navbar = () => {
  return (
    <Section id="#hero">
      <Container>
        <Links>
          <Logo src="./img/logo.png"/>
          <List>
            <ListItem><Link href="#hero">Home</Link></ListItem>
            <ListItem><Link href="#introduce">Sobre mim</Link></ListItem>
            <ListItem><Link href="#works">Projetos</Link></ListItem>
            <ListItem><Link href="#contact">Contato</Link></ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png"/>
          <Button onClick={onClick}>Contrate me</Button>
        </Icons>
      </Container>
    </Section>
  )
}
