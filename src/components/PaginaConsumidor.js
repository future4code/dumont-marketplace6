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
                <Header 
                    onClick={this.props.onClickGoHome}
                    onClickGoHome={this.props.onClickGoHome}
                    onClickGoCarrinho={this.props.onClickGoCarrinho}/>
                <Filtro
                    onChangeFiltroMax={this.props.onChangeFiltroMax}
					onChangeFiltroMin={this.props.onChangeFiltroMin}
					onChangeFiltroNome={this.props.onChangeFiltroNome}
					onChangeOrdem={this.props.onChangeOrdem}
                    filtrado={this.props.filtrado}
                    onClickFiltrado={this.props.onClickFiltrado}/>
                <CardProduto 
                    pegarProdutos={this.props.pegarProdutos}
                    produtos={this.props.produtos}
                    adicionaProdutoCarrinho={this.props.adicionaProdutoCarrinho}
                    favoritaProduto={this.props.favoritaProduto}
                    favoritos={this.props.favoritos}
                    filtrarEOrdenar={this.props.filtrarEOrdenar}
                    filtroMin = {this.props.filtroMin}
					filtroMax = {this.props.filtroMax}
					ordem = {this.props.ordem}
                    filtrado={this.props.filtrado}/>
            </div>
        )
    }
}
