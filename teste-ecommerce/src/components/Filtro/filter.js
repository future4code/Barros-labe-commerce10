import { FiltersContainer } from "./style";

const Filters = (props) => {
   return <FiltersContainer>
    <h2>Filtros</h2>
    
      <input
         placeholder="Pesquisa"
         value={props.query}
         onChange={(ev) => props.setQuery(ev.target.value)}
      />

      <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={(ev) => props.setMinPrice(ev.target.value)}
      />

      <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={(ev) => props.setMaxPrice(ev.target.value)}
      />

      <span>
         <label htmlFo="sortingParameter">Ordenar por: </label>
         <select
            name="sortingParameter"
            value={props.sortingParameter}
            onChange={(ev) => props.setSortingParameter(ev.target.value)}
         >
            <option value="title">Título</option>
            <option value="price">Preço</option>
         </select>
      </span>

      <select
         value={props.order}
         onChange={(ev) => props.setOrder(ev.target.value)}
      >
         <option value={"asc"}>Crescente</option>
         <option value={"desc"}>Decrescente</option>

      </select>

   </FiltersContainer>

};

export default Filters