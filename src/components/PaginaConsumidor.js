import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Header} from './Header'
import {Filtro} from './Filtro'
import {CardProduto} from './CardProduto'



export class PaginaConsumidor extends React.Component{
    state = {
        produtos:[1,2]
    }
    componentDidMount = () => {
        this.pegarProdutos()
    };

    pegarProdutos = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products")
        .then((resposta)=>{
            this.setState({produtos:resposta.data.products})
            console.log(resposta)
            console.log(this.state.produtos)
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <Header />
                <Filtro/>
                <CardProduto 
                    pegarProdutos={this.pegarProdutos}
                    produtos={this.state.produtos}/>
            </div>
        )
    }
}
