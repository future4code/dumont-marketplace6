import React from 'react'
import styled from "styled-components"
import Estrela from "../assets/starIcon.svg"

const ContainerCard = styled.section` // Container principal do card
    width: 800px;
    height: 240px;
    background-color: #efefec;
    display: flex;
    margin-left: auto;
    margin-right: 32px;  
    margin-top:5vh;

        div{
            
            margin-left: 8px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            h3{
                font-size: 24px;
                margin-top: 8px;
                display: block;
                
            }

            p{
                font-size: 16px;
                margin-top: 0;
            }
        }        
`
const PagPay = styled.div`
    display: flex;
    flex-direction: column;    
   
`
const Preco = styled.div`
    display: flex;
    flex-direction: row;
    
    
    justify-content: space-between;
    
    

    h2{
        font-size: 48px;
        color: #43ADA5;
        align-self: flex-start;
       
    }

    img{
        width: 30px;
        height: 30px;
        align-self: flex-end;
        margin-top: -100px;
        display: inline;
    }
`
const ContainerBotao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 40px;

`


const ImgProduto = styled.img` // Imagem do produto
    height: 240px;
    width: 163px;

`

const ButtonCompra = styled.button`
    background-color:#43ADA5;
    color:white;
    border-radius:4px;
    border:none;
    height:63px;
    width:302px;
    font-weight:500;
    font-size:1.1em;
    align-self: flex-end;
    display: block;
    margin-bottom: 0;
    margin-right: 10px;
   
    
    
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

export class CardProduto extends React.Component{
    
    render(){
        const renderProdutos = this.props.produtos.map((produto)=> {
            return(
                <ContainerCard>
                <ImgProduto src={produto.photos}/>
                <div>
                    <h3>{produto.name}</h3>
                    <p>{produto.category}</p>
                    <p>{produto.description}</p>
                </div>
                <PagPay>
                    <Preco>
                        <h2>R${produto.price}</h2>
                        <img src={Estrela}/>
                    </Preco>                     
                    <ContainerBotao>
                    <h6>{produto.installments} vezes sem juros</h6>
                        <ButtonCompra onClick={()=>this.props.adicionaProdutoCarrinho(produto)}>Adicionar no carrinho</ButtonCompra>
                    </ContainerBotao>
                    
                </PagPay>   
                
                                
                            
                
            </ContainerCard>  
        )})
            return(
                <div>
                    {renderProdutos}
                </div>
            )
        }
       
    }
