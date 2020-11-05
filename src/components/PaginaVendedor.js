import React from 'react'
import styled from 'styled-components'
import {Header} from './Header'
import AdicionarProduto from './AdicionarProduto'




export class PaginaVendedor extends React.Component{
    render(){
        return(
            <div>
                <Header onClickGoHome={this.props.onClickGoHome}/>
                <AdicionarProduto />
            </div>
        )
    }
}
