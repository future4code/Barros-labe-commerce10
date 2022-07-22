import React, { useState } from "react";
import './FormEsque.css'






function FormEsque (){

const [itens, setItens] = useState()


function addNovoItem(itens){
    const CopiaItens = Array.from(itens)
    CopiaItens.push({id: itens.length, value: itens})
    setItens(CopiaItens)
}

function adicionarItens({target}, index){
    const itensCopy = Array.from();
    itensCopy.splice(index, 1, {id: index, value: target.value})
}

    return(
    
        <div className="Corpo">
            <h1>Filtros</h1>
   
   
    <form>Valor Máximo
            <input 
            type = "number"
            requered placeholder="Insira um valor"
             value ={itens} onChange = {e =>setItens(e.target.value)}>
            </input>
           
            <label>Valor Minimo
            <input type="number" placeholder="Insira um valor" />
            </label>
            <label> Busca por Nome
            <input type="text " placeholder="Produto" />
            </label>
        </form>    
        </div>

    )

    

}

export default FormEsque