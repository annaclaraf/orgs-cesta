import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cesta = {
  topo: {
    titulo: "Detalhe da cesta"
  },
  detalhes: {
    nome: "Cesta de Verduras",
    imageFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00", 
    botao: "Comprar"
  }, 
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        image: tomate
      },
      {
        nome: "Brócolis",
        image: brocolis
      },
      {
        nome: "Batata",
        image: batata
      },
      {
        nome: "Pepino",
        image: pepino
      },
      {
        nome: "Abóbora",
        image: abobora
      }
    ]
  }
}

export default cesta;