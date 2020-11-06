import React from 'react'
import styled from 'styled-components'


const ContainerFiltro = styled.div`
    background-color:#FCCA64;
    display:flex;
    flex-direction:column;
    width:22vw;
    margin-top:5vh;
    padding-left:1vw;
    height:65vh;
    align-items:flex-start;
    justify-content:space-evenly;
    position:fixed;`

const TituloFiltro = styled.h2`
    font-size:30px;`

const FormFiltro = styled.form`
    `

const ContainerDropdown = styled.div`
    display:flex;
    width:20vw;
    margin-bottom:3vh;`

const StyledInputLabel = styled.label`
    color:black;`

const StyledSelect = styled.select`
    width:60%;
    :focus{
        outline:none;
    }
    border:none;
    height:3vh;
    margin-left:.5vw;
    border-radius:5px;
    padding-left:.5vw;`

const MenuItem = styled.option`
    `

const MenuPlaceholder = styled.option`
    `

const ContainerValorMinMax = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;`

const ContainerValorMax = styled.div`
    margin-left:1vw;
    display:flex;
    flex-direction:column;
    `

const ContainerValorMin = styled.div`
    display:flex;
    flex-direction:column;`

const LabelForm = styled.label`
    margin-bottom:1vh;
    `

const InputForm = styled.input` 
    border:none;
    :focus{
        outline:none;
    }
    border-radius:5px;
    height:3vh;
    padding-left:.5vw;
    width:8vw;`

const ContainerCheckbox = styled.div` 
    display:flex;
    flex-direction:column;
    margin-bottom:2vh;`

const TituloCheckbox = styled.h4`
   `

const InputCheckbox = styled.input`
    cursor: pointer;
    margin-right:1vw;
    `

const ContainerLabelCheckbox = styled.div`  
    display:flex;
    margin-bottom:1vh;`

const LabelCheckbox = styled.label`
    `

const ContainerButton = styled.div`
    display:flex;
    justify-content:center;
    width:20vw;`

const StyledButton = styled.button`
    margin:auto;
    background-color:#43ADA5;
    color:white;
    border-radius:4px;
    border:none;
    height:4vh;
    width:10vw;
    font-weight:500;
    font-size:1.1em;
    :focus{
    outline:none;
    }
    :hover{
        cursor:pointer;
        background-color:#139188;
    }
    :active{
        background-color: #139188;
        box-shadow: 0 1px #666;
        transform: translateY(4px);
    }`

export class Filtro extends React.Component{
    render(){
        return(
            <ContainerFiltro>
                <TituloFiltro>Filtros</TituloFiltro>
                <FormFiltro>
                    <ContainerDropdown>
                        <StyledInputLabel id="ordenar-por-label">Ordenar por:</StyledInputLabel>
                        <StyledSelect
                            labelId="ordenar-por-label"
                            id="odernar-por-select"  
                            onChange = {this.props.onChangeOrdem}  
                        >
                            <MenuPlaceholder selected="selected" value="" disabled selected hidden>Selecione</MenuPlaceholder>
                            <MenuItem>crescente</MenuItem>
                            <MenuItem>decrescente</MenuItem>
                        </StyledSelect>
                    </ContainerDropdown>
                    <ContainerValorMinMax>
                        <ContainerValorMin>
                            <LabelForm>Valor Mínimo</LabelForm>
                            <InputForm 
                            placeholder="De" 
                            onChange={this.props.onChangeFiltroMin}></InputForm>
                        </ContainerValorMin>
                        <ContainerValorMax>
                            <LabelForm>Valor Máximo</LabelForm>
                            <InputForm 
                            placeholder="Até" 
                            onChange={this.props.onChangeFiltroMax}></InputForm>
                        </ContainerValorMax>
                    </ContainerValorMinMax>
                    <ContainerCheckbox>
                        <TituloCheckbox>Categoria</TituloCheckbox>
                        <ContainerLabelCheckbox>
                            <InputCheckbox type="checkbox" id="calcados" name="calcados" value="calcados"/>
                            <LabelCheckbox for="calcados">Calçados</LabelCheckbox>
                        </ContainerLabelCheckbox>
                        <ContainerLabelCheckbox>
                            <InputCheckbox type="checkbox" id="artigos" name="artigos" value="artigos"/>
                            <LabelCheckbox for="artigos">Artigos </LabelCheckbox>
                        </ContainerLabelCheckbox>
                        <ContainerLabelCheckbox>
                            <InputCheckbox type="checkbox" id="roupas" name="roupas" value="roupas"/>
                            <LabelCheckbox for="roupas">Roupas</LabelCheckbox>
                        </ContainerLabelCheckbox>
                        <ContainerLabelCheckbox>
                            <InputCheckbox type="checkbox" id="eletronicos" name="eletronicos" value="eletronicos"/>
                            <LabelCheckbox for="eletronicos">Eletrônicos</LabelCheckbox>
                        </ContainerLabelCheckbox>
                        <ContainerLabelCheckbox>
                            <InputCheckbox type="checkbox" id="moveis" name="moveis" value="moveis"/>
                            <LabelCheckbox for="moveis">Eletrônicos</LabelCheckbox>
                        </ContainerLabelCheckbox>
                    </ContainerCheckbox>
                    <ContainerButton>
                        <StyledButton onClick={this.props.onClickFiltrado}>FILTRAR</StyledButton>
                    </ContainerButton>
                </FormFiltro>
            </ContainerFiltro>
        )
    }
}