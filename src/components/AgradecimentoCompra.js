import React from 'react'
import styled from 'styled-components'
import fullLogo from '../assets/fullLogo.png'

const ContainerHome = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    background-color:#FFFCEF;
    justify-content:center;`

const FullLogo = styled.img` 
    width:10vw;
    align-self:center;`

const ContainerBotoes = styled.div`
    display:flex;
    align-self:center;
    `

const Recado = styled.h2`
    color:#43ADA5;
    align-self:center;
    text-align:center;
    letter-spacing:.5px;
    font-weight:500;
    margin-top:6vh;`

const BotaoComprarMais = styled.button`
    margin-top:7vh;
    margin-left:2vw;
    margin-right:2vw;
    background-color:#43ADA5;
    color:white;
    border-radius:4px;
    border:none;
    height:7vh;
    width:20vw;
    font-weight:500;
    font-size:1.1em;
    :focus{
    outline:none;
    }
    :hover{
        cursor:pointer;
        background-color:#139188;
    }
    :active{
        background-color: #139188;
        box-shadow: 0 1px #666;
        transform: translateY(4px);
    }`

const BotaoVoltarHome = styled.button` 
    margin-top:7vh;
    margin-left:2vw;
    margin-right:2vw;
    background-color:transparent;
    color:#43ADA5;
    border-radius:4px;
    border:1px solid #43ADA5;
    height:7vh;
    width:15vw;
    font-weight:500;
    font-size:1.1em;
    :focus{
    outline:none;
    }
    :hover{
        cursor:pointer;
        background-color:#139188;
        color:white;
    }
    :active{
        background-color: #139188;
        box-shadow: 0 1px #666;
        transform: translateY(4px);
        color:white;
    }`

export class AgradecimentoCompra extends React.Component{
    render(){
        return(
            <ContainerHome>
                <FullLogo src={fullLogo}/>
                <Recado>Sua compra de R$200 <br/>foi efetuada com sucesso!</Recado>
                <ContainerBotoes>
                    <BotaoComprarMais onClick={this.props.onClickGoPaginaConsumidor}>COMPRAR MAIS PRODUTOS</BotaoComprarMais>
                    <BotaoVoltarHome onClick={this.props.onClickGoHome}>VOLTAR HOME</BotaoVoltarHome>
                </ContainerBotoes>
            </ContainerHome>
        )
    }
}