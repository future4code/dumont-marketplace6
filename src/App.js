
import React from 'react'
import { AppContainer } from './components/AppContainer'
import {Header} from './components/Header'
import {Filtro} from './components/Filtro'
import {CardProdutoCarrinho} from './components/CardProdutoCarrinho'
import {Home} from './components/Home'
import {AgradecimentoCompra} from './components/AgradecimentoCompra'
import {PaginaConsumidor} from './components/PaginaConsumidor'
import {PaginaCarrinho} from './components/PaginaCarrinho'
import {PaginaVendedor} from './components/PaginaVendedor'
import axios from 'axios'

class App extends React.Component{
	state = {
        produtos:[],
        carrinho:[]
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
	
    adicionaProdutoCarrinho = (produto) => {
        let novoCarrinho = [... this.state.carrinho]
        novoCarrinho.push(produto)
        this.setState({carrinho:novoCarrinho})
        console.log(this.state.carrinho)
    }
	render(){
		return (
			
		<PaginaConsumidor 
			pegarProdutos={this.pegarProdutos}
			produtos={this.state.produtos}
			adicionaProdutoCarrinho={this.adicionaProdutoCarrinho}/>
		)
	}
}
export default App

