import React from 'react'
import styled from 'styled-components'
import {Header} from './Header'
import {Filtro} from './Filtro'
import {CardProduto} from './CardProduto'



export class PaginaConsumidor extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Filtro />
                <CardProduto/>
            </div>
        )
    }
}
