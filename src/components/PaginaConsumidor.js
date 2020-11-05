import React from 'react'
import styled from 'styled-components'
import {Header} from './Header'
import {Filtro} from './Filtro'
import {CardProduto} from './CardProduto'



export class PaginaConsumidor extends React.Component{
    render(){
        return(
            <div>
                <Header 
                onClick={this.props.onClickGoHome}
                onClickGoHome={this.props.onClickGoHome}
                onClickGoCarrinho={this.props.onClickGoCarrinho}/>
                <Filtro />
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
              
            </div>
        )
    }
}
