import trybewallet from '../../public/img/projects/trybewallet.png'
import shoppingcart from '../../public/img/projects/shoppingcart.png'
import tryunfant from '../../public/img/projects/tryunfant.png'
import dropmailchallenge from '../../public/img/projects/dropmailchallenge.png'
import enafood from '../../public/img/projects/enafood.jpg'

interface Project {
  id: number,
  name: string,
  description: string,
  img: string,
  link: string,
}

const projects: Project[] = [
  {  
    id: 1,
    name: "Trybe Wallet",
    description: "Carteira de controle de gastos com conversor de moedas",
    img: trybewallet,
    link: "https://github.com/mateussousaa/project-trybe-wallet"
  }, {
    id: 2,
    name: "Shopping Cart",
    description: "Carrinho de compras consumindo dados da API do Mercado Livre.",
    img: shoppingcart,
    link: "https://github.com/mateussousaa/project-shopping-cart"

  },{
    id: 3,
    name: "DropMailChallenge",
    description: "Gerador de emails temporários",
    img: dropmailchallenge,
    link: "https://github.com/mateussousaa/DropMailChallenge"

  }, {
    id: 4,
    name: "Tryunfant",
    description: "Jogo de Cartas no estilo Super Trunfo",
    img: tryunfant,
    link: "https://github.com/mateussousaa/project-tryunfo"

  }, {
    id: 5,
    name: "Enafood",
    description: "A API EnaFood é um sistema de delivery em Node.js e Mongo.DB",
    img: enafood,
    link: "https://github.com/mateussousaa/EnaFood"
  }
]

export default projects;