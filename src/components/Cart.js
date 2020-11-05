import React from 'react'
import styled from 'styled-components'
import { CardProdutoCarrinho } from './CardProdutoCarrinho'


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #efefec;
    padding: 10px;
    height: 72vh;
`
const StyledHr = styled.hr`
    background-color: #43ADA5;
    border: 1px solid #43ADA5;
    width: 100%;
`
const StyledP = styled.p`
    color: #43ADA5;
    font-size: 2em;
    margin: auto 5% 0% auto;
`
const StyledButton = styled.button`
    margin: 16px 0 0 75%;
    background-color: #43ADA5;
    color: white;
    border-radius: 4px;
    border: none;
    height: 4vh;
    width: 20vw;
    font-weight: 500;
    font-size: 1.1em;
    :focus{
        outline:none;
    }
    :hover{
        cursor: pointer;
        background-color: #139188;
    }
    :active{
        background-color: #139188;
        box-shadow: 0 1px #666;
        transform: translateY(4px);
    }
`

class Cart extends React.Component {
    render() {
        return (
            <MainContainer>
                <CartContainer>
                    <h1>Carrinho (3)</h1>
                    <StyledHr/>
                        <CardProdutoCarrinho/>
                        <CardProdutoCarrinho/>
                        <CardProdutoCarrinho/>
                    <StyledHr/>
                    <StyledP><b>Total: R$ 200</b></StyledP>
                </CartContainer>
                <StyledButton onClick={this.props.onClickEfetuaCompra}>Continuar compra</StyledButton>
            </MainContainer>
        )
    }
}

export default Cart;