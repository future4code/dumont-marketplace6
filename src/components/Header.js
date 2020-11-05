import React from 'react'
import styled from 'styled-components'
import LogoSimples from '../assets/logoSimples.png'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import SearchIcon from '../assets/searchIcon.svg'


const ContainerHeader = styled.div`
    background-color:#FCCA64;
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:12vh;`

const ContainerLogoBusca = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:33%;`

const Logo = styled.img`
    height:8vh;
    transition: transform 1.5s;
    :hover{
        transform: scale(1.1);
        cursor:pointer;
        
    }`

const ContainerInput = styled.div`
    display:flex;
    align-items:center;
    background-color:white;
    height:5vh;
    border-radius:5px;
    margin-left:-3vw;
    `

const Input = styled.input`
    border:none;
    padding-left:1vw;
    border-radius:5px;
    height:4vh;
    width:13vw;
    :focus{
        outline:none;
    }`

const Search = styled.img`
    height:3vh;
    padding-right:1vw;
    :hover{
        cursor:pointer;
    }`

const ContainerCategorias = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:33%;
    margin-right:15vw;`

const LinkNav = styled.a`
    font-weight:700;
    margin:0 1vw;
    :hover{
        color:#43ADA5;
        cursor:pointer;
    }`

const ContainerIcones = styled.div`
    width:20%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin-right:4vw;
    `

const IconContainer = styled.div`
    :hover{
        transform: scale(1.3);
        cursor:pointer;
    }`

export class Header extends React.Component{
    render(){
        return(
            <ContainerHeader>
                <ContainerLogoBusca>
                    <Logo src={LogoSimples} onClick={this.props.onClickGoHome}/>
                    <ContainerInput>
                        <Input placeholder={'Pesquisa'}></Input>
                        <Search src={SearchIcon}/>
                    </ContainerInput>
                </ContainerLogoBusca>
                <ContainerCategorias>
                    <LinkNav>Roupas</LinkNav>
                    <LinkNav>Artigos</LinkNav>
                    <LinkNav>Calçados</LinkNav>
                    <LinkNav>Eletrônicos</LinkNav>
                    <LinkNav>Móveis</LinkNav>
                </ContainerCategorias>
                <ContainerIcones>
                    <IconContainer>
                        <AccountBoxRoundedIcon/>
                    </IconContainer>
                        <IconContainer>
                    <ModeCommentRoundedIcon/>
                        </IconContainer>
                    <IconContainer>
                        <ShoppingCartRoundedIcon onClick={this.props.onClickGoCarrinho}/>
                    </IconContainer>
                    <IconContainer>
                        <GradeRoundedIcon/>
                    </IconContainer>
                </ContainerIcones> 
            </ContainerHeader>
        )
    }
}