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
    height:2vh;`

const Quantidade = styled.p`
    `

const IconeMais = styled.img`
    height:3vh;`

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

    height:4vh;
    width:2.5vw;`
export class CardProdutoCarrinho extends React.Component{
    state = {
        favoritado: false
    }
    onClickFavorita = () => {
        this.setState({favoritado:!this.state.favoritado})
    }
    render(){
        const renderizaNaTela = () => {
            if(this.state.favoritado === false){
                return(
                    <ContainerCard>
                        <ImagemProduto src={ImagemTeste}/>
                        <ContainerElementosProduto>
                            <NomeProduto>Adidas phosphere running - tênis para academia</NomeProduto>
                            <CategoriaProduto>Calçados Masculinos</CategoriaProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Vivamus finibus ex sed fermentum iaculis.</DescricaoProduto>
                        </ContainerElementosProduto>
                        <ContainerQuantidade>
                            <IconeMenos src={MinusIcon}/>
                            <Quantidade>4</Quantidade>
                            <IconeMais src={PlusIcon}/>
                        </ContainerQuantidade>
                        <ContainerIcons>
                            <IconeEstrelaOutline src={starOutlineIcon}  onClick={this.onClickFavorita}/>
                            <IconTrashCan src={trashCanIcon}/>
                        </ContainerIcons>
                    </ContainerCard>
                )
            } else {
                return(
                    <ContainerCard>
                        <ImagemProduto src={ImagemTeste}/>
                        <ContainerElementosProduto>
                            <NomeProduto>Adidas phosphere running - tênis para academia</NomeProduto>
                            <CategoriaProduto>Calçados Masculinos</CategoriaProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Vivamus finibus ex sed fermentum iaculis.</DescricaoProduto>
                        </ContainerElementosProduto>
                        <ContainerQuantidade>
                            <IconeMenos src={MinusIcon}/>
                            <Quantidade>4</Quantidade>
                            <IconeMais src={PlusIcon}/>
                        </ContainerQuantidade>
                        <ContainerIcons>
                            <IconeEstrelaOutline src={starFullIcon}  onClick={this.onClickFavorita}/>
                            <IconTrashCan src={trashCanIcon}/>
                        </ContainerIcons>
                    </ContainerCard>
                )
            }
        }
        return (
            <div>{renderizaNaTela()}</div>
        )
    }
}