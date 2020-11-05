import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Header} from './Header'
import {Filtro} from './Filtro'
import {CardProduto} from './CardProduto'



export class PaginaConsumidor extends React.Component{
    
    render(){
        return(
            <div>
                <Header />
                <Filtro/>
                <CardProduto 
                    pegarProdutos={this.props.pegarProdutos}
                    produtos={this.props.produtos}
                    adicionaProdutoCarrinho={this.props.adicionaProdutoCarrinho}/>
            </div>
        )
    }
}
