
import React from 'react'
import {Home} from './components/Home'
import {AgradecimentoCompra} from './components/AgradecimentoCompra'
import {PaginaConsumidor} from './components/PaginaConsumidor'
import {PaginaCarrinho} from './components/PaginaCarrinho'
import {PaginaVendedor} from './components/PaginaVendedor'
import axios from 'axios'

class App extends React.Component{
	state = {
		home:true,
		pConsumidor:false,
		pVendedor:false,
		pCarrinho:false,
		pAgradecimento:false,
        produtos:[],
		carrinho:[],
		valorCarrinho:0,
	}
	
	componentDidMount = () => {
        this.pegarProdutos()
	};
	
    pegarProdutos = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products")
        .then((resposta)=>{
			this.setState({produtos:resposta.data.products})
			let novosProdutos = [...this.state.produtos]
			novosProdutos.map((produto)=>{
				produto.quantidade = 0
			})
			this.setState({produtos:novosProdutos})
            console.log(resposta)
            console.log(this.state.produtos)
        }).catch((err) => {
            console.log(err)
        })
	}
	aumentarQuantidadeProduto = (produto) =>{
		let novoCarrinho = [... this.state.carrinho]
		novoCarrinho.map((produtoCarrinho)=>{
			if(produto.id === produtoCarrinho.id){
				produto.quantidade += 1
				this.setState({valorCarrinho:produto.price + this.state.valorCarrinho})
			}
		})
		
	}
	
	diminuirQuantidadeProduto = (produto) => {
		let novoCarrinho = [... this.state.carrinho]
		novoCarrinho.map((produtoCarrinho)=>{
			if(produto.id === produtoCarrinho.id){
				produto.quantidade -=1
				this.setState({valorCarrinho:this.state.valorCarrinho - produto.price})
			}})
	}
    adicionaProdutoCarrinho = (produto) => {
		let novoCarrinho = [... this.state.produtos]
		novoCarrinho.map((produtoCarrinho)=>{
			if(produto.id === produtoCarrinho.id){
				produto.quantidade +=1
				this.setState({valorCarrinho:produto.price + this.state.valorCarrinho})
			}})
		let carrinhoFiltrado = novoCarrinho.filter(function(item){
			return item.quantidade > 0
		})
				
		this.setState({carrinho:carrinhoFiltrado})
		console.log(this.state.carrinho)
		alert('Produto adicionado!')
			
		}
        
    
	
	onClickGoPaginaConsumidor = () => {
		this.setState({pConsumidor:true, home:false, pAgradecimento:false})
	}

	onClickGoPaginaVendedor = () => {
		this.setState({pVendedor:true, home:false})
	}
	onClickGoHome = () => {
		this.setState({home:true, pConsumidor:false, pVendedor:false, pCarrinho:false, pAgradecimento:false})
	}
	onClickGoCarrinho = () => {
		this.setState({pCarrinho:true, pConsumidor:false})
	}

	onClickEfetuaCompra = () => {
		this.setState({pCarrinho:false, pAgradecimento:true})
	}
	render(){
		const renderizaPagina = () => {
			if (this.state.home === true){
				return(
					<Home
					onClickGoPaginaConsumidor = {this.onClickGoPaginaConsumidor}
					onClickGoPaginaVendedor = {this.onClickGoPaginaVendedor}/>
				)
			} else if(this.state.pConsumidor === true){
				return(
					<PaginaConsumidor
					onClickGoHome={this.onClickGoHome}
					onClickGoCarrinho={this.onClickGoCarrinho}
					pegarProdutos={this.pegarProdutos}
					produtos={this.state.produtos}
					adicionaProdutoCarrinho={this.adicionaProdutoCarrinho}/>
				)
			} else if(this.state.pVendedor === true){
				return(
					<PaginaVendedor
					onClickGoHome={this.onClickGoHome}/>
				)
			} else if(this.state.pCarrinho === true){
				return(
					<PaginaCarrinho 
					onClickEfetuaCompra={this.onClickEfetuaCompra}
					onClickGoHome={this.onClickGoHome}
					carrinho={this.state.carrinho}
					valorCarrinho={this.state.valorCarrinho}
					aumentarQuantidadeProduto={this.aumentarQuantidadeProduto}
					diminuirQuantidadeProduto={this.diminuirQuantidadeProduto}
					/>
				)
			} else if(this.state.pAgradecimento === true){
				return(
					<AgradecimentoCompra 
					onClickGoPaginaConsumidor={this.onClickGoPaginaConsumidor}
					onClickGoHome={this.onClickGoHome}/>
				)
			}
		}
		return(
			<div>{renderizaPagina()}</div>
		)
	}
}
export default App

