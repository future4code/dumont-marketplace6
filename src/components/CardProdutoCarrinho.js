import React from 'react'
import styled from 'styled-components'
import ImagemTeste from '../assets/imagemTeste.jpg'
import PlusIcon from '../assets/plusIcon.svg'
import MinusIcon from '../assets/minusIcon.svg'
import starOutlineIcon  from '../assets/starIcon.svg'
import starFullIcon from '../assets/starIconFull.svg'
import trashCanIcon from '../assets/trashCanIcon.svg'

const ContainerCard = styled.div`
    display:flex;
    align-items:center;
    border:1px solid black;
    width:50%;
    background-color:white;
    margin:auto;
    margin-bottom:1vh;`

const ImagemProduto = styled.img`
    height:20vh;
    width:10vw;`

const ContainerElementosProduto = styled.div`
    display:flex;
    flex-direction:column;`

const NomeProduto = styled.p`
    font-size:.8em;
    font-weight:700;
    margin-bottom:-1vh;`

const CategoriaProduto = styled.p`
    font-size:.6em;`

const DescricaoProduto = styled.p`
    font-size:.8em;`

const ContainerQuantidade = styled.div`
    display:flex;
    background-color:#C4C4C4;
    height:5vh;
    width:7vw;
    justify-content:space-evenly;
    align-items:center;
    margin-left:3vw;
    `

const IconeMenos = styled.img`
    height:2vh;
    cursor:pointer;`

const Quantidade = styled.p`
    `

const IconeMais = styled.img`
    height:3vh;
    cursor:pointer;`

const IconeEstrelaOutline = styled.img`
    align-self:flex-start;
    cursor:pointer;`

const ContainerIcons = styled.div`  
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:20vh;
    align-items:flex-end;
    margin-left:2vw;`
 const IconTrashCan = styled.img`
    cursor:pointer;
    height:4vh;
    width:2.5vw;`
export class CardProdutoCarrinho extends React.Component{
    
    
    render(){
        const renderCarrinho = this.props.carrinho.map((produto)=>{
            return(
            <ContainerCard>
                <ImagemProduto src={produto.photos}/>
                <ContainerElementosProduto>
                    <NomeProduto>{produto.name}</NomeProduto>
                    <CategoriaProduto>{produto.category}</CategoriaProduto>
                    <DescricaoProduto>{produto.description}</DescricaoProduto>
                </ContainerElementosProduto>
                <ContainerQuantidade>
                    <IconeMenos src={MinusIcon} onClick={()=>IconeMais>this.props.diminuirQuantidadeProduto(produto)}/>
                    <Quantidade>{produto.quantidade}</Quantidade>
                    <IconeMais src={PlusIcon} onClick={()=>IconeMais>this.props.aumentarQuantidadeProduto(produto)}/>
                </ContainerQuantidade>
                <ContainerIcons>
                    <IconeEstrelaOutline src={starOutlineIcon}/>
                    <IconTrashCan src={trashCanIcon} onClick={()=>this.props.removeProdutoCarrinho(produto)}/>
                </ContainerIcons>
            </ContainerCard>
                    )
                })
           
        return (
            <div>{renderCarrinho}</div>
        )
    }
}