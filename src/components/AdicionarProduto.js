import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f0efeb;
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom: 8px;
  padding: 8px;
`;

const Div2 = styled.div``;

const Titulo = styled.h3`
  color: #00bfb2;
`;

const Label = styled.label`
  margin-left: 10px;
  
`;

const Input = styled.input`
  display: column;
  justify-content: center;
  margin-left: 10px;
  width: 10rem;
`;

const Select = styled.select`
  margin-left: 10px;
`;

const Button = styled.button`
  color: white;
  border-radius: 4px;
  border: none;
  height: 7vh;
  width: 20vw;
  font-weight: 500;
  font-size: 1.1em;
  background-color: #00bfb2;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
    background-color: #72efdd;
  }
  :active {
    background-color: red;
    box-shadow: 0 1px #666;
    transform: translateY(4px);
  }
`;

class AdicionarProduto extends React.Component {
  render() {
    return (
      <div>
        <Titulo>Vamos cadastrar seus produtos!</Titulo>
        <Container>
          <InputContainer>
            <Label>Nome</Label>
            <Input />
          </InputContainer>

          <InputContainer>
            <Label>Descrição</Label>
            <Input />
          </InputContainer>

          <InputContainer>
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
          </InputContainer>

          <InputContainer>
            <Label>Url Imagem</Label>
            <Input />
          </InputContainer>
          <Button>Anunciar</Button>
        </Container>
      </div>
    );
  }
}

export default AdicionarProduto;
