import React from "react";
import styled from "styled-components";

const Div = styled.div`
`;

const Container = styled.div`
display:flex;
flex-direction:column;
  background-color: #f0efeb;
  padding: 20px;
  margin:5rem 10rem 10rem 12rem;

`;



const Div2 = styled.div``;

const Titulo = styled.h3`
margin-top:3rem;
font-size:2rem;
display:flex;
justify-content:center;
  color: #00bfb2;
`;

const Label = styled.label`
 margin:1rem 0.4rem;
`;

const Input = styled.input`
`

const Select = styled.select`
 margin:2rem 0.5rem;
`;

const Button = styled.button`
  color: white;
  
  border-radius: 4px;
  border: none;
  height: 7vh;
  width: 8rem;
  font-weight: 500;
  font-size: 1.1em;
  background-color: #00bfb2;
  margin-top:1rem;
  
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
    background-color: #72efdd;
  }
  :active {
    background-color: #139188;
        box-shadow: 0 1px #666;
        transform: translateY(4px);
  }
`;

class CadProduto extends React.Component {
  render() {
    return (
      <Div>
        <Titulo>Vamos cadastrar seu produtos!</Titulo>

        <Container>
          <Label>Nome</Label>
          <Input />
          <Label>Descrição</Label>
          <Input />

          <Div2>
          <Label>Preço</Label>
          <Input />
          <Label>Categoria</Label>
          <Select>
            <option value="roupas">Roupas</option>
            <option value="artigos">Artigos</option>
            <option value="calcados">Calçados</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="moveis">Móveis</option>
          </Select>

          <Label>Meio de Pagamento</Label>
          <Select>
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Crédito</option>
            <option value="debito">Debito</option>
          </Select>
          </Div2>

          <Label>Url Imagem</Label>
          <Input />

          <Button>Anunciar</Button>
        </Container>
      </Div>
    );
  }
}
export default CadProduto;
