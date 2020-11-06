
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
		quantidadeProdutos:0,
		favoritos:[],
		filtroMax:0,
		filtroMin:0,
		filtroNome:0,
		ordem:'crescente'
	}
	
	componentDidMount = () => {
        this.pegarProdutos()
	};
	
	filtraProdutos = () => {
		let novosProdutos = [... this.state.produtos]
		
	}

	onChangeFiltroMax = (event) =>{
		this.setState({filtroMax:event.target.value})
	}

	onChangeFiltroMin = (event) =>{
		this.setState({filtroMin:event.target.value})
	}

	onChangeFiltroNome = (event) =>{
		this.
		setState({filtroNome:event.target.value})
	}
	onChangeOrdem = (event) =>{
		this.setState({ordem:event.target.value})
	}

    pegarProdutos = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products")
        .then((resposta)=>{
			this.setState({produtos:resposta.data.products})
			let novosProdutos = [...this.state.produtos]
			novosProdutos.map((produto)=>{
				produto.quantidade = 0
				produto.favoritado = false
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
				this.setState({valorCarrinho:produto.price + this.state.valorCarrinho, quantidadeProdutos: this.state.quantidadeProdutos + 1})
			}
		})
		
	}
	
	diminuirQuantidadeProduto = (produto) => {
		let novoCarrinho = [... this.state.carrinho]
		novoCarrinho.map((produtoCarrinho)=>{
			if(produto.id === produtoCarrinho.id){
				produto.quantidade -=1
				this.setState({valorCarrinho:this.state.valorCarrinho - produto.price, quantidadeProdutos: this.state.quantidadeProdutos - 1})
				if(produto.quantidade <= 0){
					let i = novoCarrinho.indexOf(produtoCarrinho)
					novoCarrinho.splice(i,1)
					this.setState({carrinho:novoCarrinho})
				}
			}})
		
	}

	removeProdutoCarrinho = (produto) => {
		let novoCarrinho = [... this.state.carrinho]
		novoCarrinho.map((produtoCarrinho)=>{
			if(produto.id === produtoCarrinho.id){
				let i = novoCarrinho.indexOf(produtoCarrinho)
				novoCarrinho.splice(i,1)
				this.setState({carrinho:novoCarrinho, 
							quantidadeProdutos: this.state.quantidadeProdutos - produtoCarrinho.quantidade, 
							valorCarrinho: this.state.valorCarrinho - (produtoCarrinho.quantidade * produtoCarrinho.price)})
				produtoCarrinho.quantidade = 0
				alert("REMOVIDO")
			}
		})
	}
	
    adicionaProdutoCarrinho = (produto) => {
		let novoCarrinho = [... this.state.produtos]
		novoCarrinho.map((produtoCarrinho)=>{
			if(produto.id === produtoCarrinho.id){
				produto.quantidade +=1
				this.setState({valorCarrinho:produto.price + this.state.valorCarrinho, quantidadeProdutos: this.state.quantidadeProdutos + 1})
			}})
		let carrinhoFiltrado = novoCarrinho.filter(function(item){
			return item.quantidade > 0
		})
				
		this.setState({carrinho:carrinhoFiltrado})
		alert('Produto adicionado!')
			
	}
	
	favoritaProduto = (produto) => {
		let listaFavoritado = [...this.state.produtos]
		listaFavoritado.map((item)=>{
			if(produto.id === item.id && item.favoritado === false){
				item.favoritado = true
				alert("produto FAVORTIADO")
			} 
		})
		let favoritosFiltrado = listaFavoritado.filter(function(e){
			return e.favoritado === true
		})
		this.setState({favoritos:favoritosFiltrado})
		console.log(this.state.favoritos)
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
					adicionaProdutoCarrinho={this.adicionaProdutoCarrinho}
					favoritaProduto={this.favoritaProduto}
					favoritos={this.state.favoritos}
					onChangeFiltroMax={this.onChangeFiltroMax}
					onChangeFiltroMin={this.onChangeFiltroMax}
					onChangeFiltroNome={this.onChangeFiltroNome}
					onChangeOrdem={this.onChangeOrdem}/>
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
					removeProdutoCarrinho={this.removeProdutoCarrinho}
					quantidadeProdutos = {this.state.quantidadeProdutos}
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

