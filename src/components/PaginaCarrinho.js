import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'
import {Header} from './Header'




export class PaginaCarrinho extends React.Component{
    render(){
        return(
            <div>
                <Header onClickGoHome={this.props.onClickGoHome}/>
                <Cart onClickEfetuaCompra={this.props.onClickEfetuaCompra}/>
            </div>
        )
    }
}
