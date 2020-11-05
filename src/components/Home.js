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
const Botao = styled.button`
    margin-top:7vh;
    margin-left:2vw;
    margin-right:2vw;
    background-color:#43ADA5;
    color:white;
    border-radius:4px;
    border:none;
    height:10vh;
    width:15vw;
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

export class Home extends React.Component{
    render(){
        return(
            <ContainerHome>
                <FullLogo src={fullLogo}/>
                <ContainerBotoes>
                    <Botao>QUERO COMPRAR</Botao>
                    <Botao>QUERO VENDER</Botao>
                </ContainerBotoes>
            </ContainerHome>
        )
    }
}