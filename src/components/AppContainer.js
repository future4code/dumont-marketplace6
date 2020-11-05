import React, { Component } from 'react'
import styled from 'styled-components' 

  const Menu = styled.div`
  width:99vw;height:99vh;
  background-color:white;
  display:grid;
  grid-template-columns:repeat(13, 1fr);
  grid-template-rows:repeat(13, 1fr);
  
    img{
      grid-column:7;
      grid-row:3/4;
    }
    strong{
      color:#04B486;font-size:32px;
      grid-column:6/9;grid-row:5;
      }
    #button1{
      background-color:#04B486;
      color:white;
      font-size:20px;
      grid-column:5/7;grid-row:8/10;
      border:none;
    }
    #button2{
      background-color:white;
      border:1px solid #04B486;
      color:#04B486;
      font-size:24px;
      grid-column:8/10;grid-row:8/10;
      
    }

`


export class AppContainer extends Component {

  state = {
    clickDaBusca:false,
    clickDoAnuncio:false
  }

  irParaBusca = e => {
      this.setState({clickDaBusca:true})
  }

  irParaPostagemAnuncio = e => {
    this.setState({clickDoAnuncio:true})
  }

  render() {
    return (
    <> 

      <Menu>
            <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e415fe9-43f0-4dc4-b950-e2818853cef1%2F2.png?table=block&id=ebade8dc-9faa-452f-9db2-31fc11607482&width=770&userId=522bed8d-0e4c-47ea-877b-aa74ac482bd8&cache=v2"width="300px"height="300px"/>
            <strong>Produto cadastrado com sucesso!</strong>
            <button id="button1">Cadastrar mais produtos</button>
            <button id="button2">Voltar Home</button>
      </Menu>

    </>
    )
  }
}
