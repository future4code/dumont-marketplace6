
import React from 'react'
import {Home} from './components/Home'
import {AgradecimentoCompra} from './components/AgradecimentoCompra'
import {PaginaConsumidor} from './components/PaginaConsumidor'
import {PaginaCarrinho} from './components/PaginaCarrinho'
import {PaginaVendedor} from './components/PaginaVendedor'

class App extends React.Component{
	state = {
		home:true,
		pConsumidor:false,
		pVendedor:false,
		pCarrinho:false,
		pAgradecimento:false,
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
					onClickGoCarrinho={this.onClickGoCarrinho}/>
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
					onClickGoHome={this.onClickGoHome}/>
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

