import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import joblist from './components/Produtos/data2.json'
import Feature from "./components/Feature/Feature";
import Hero from "./components/Hero/index";
import Card from "./components/Produtos"
import Filters from "./components/Filtro/filter";
import { ListContainer } from "./components/Filtro/style";


function App() {

  const [jobs] = useState(joblist)
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")

  return (
    <Router>
      <GlobalStyle />
      <Hero />

      <Filters
                  query={query}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  sortingParameter={sortingParameter}
                  order={order}
                  setQuery={setQuery}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                  setSortingParameter={setSortingParameter}
                  setOrder={setOrder}
            />

<ListContainer>
      {jobs
        .filter(job => {
          return job.name.includes(query) || job.desc.includes(query)
        })
        .filter(job => {
          return job.price >= minPrice || minPrice === ""
        })
        .filter(job => {
          return job.price <= maxPrice || maxPrice === ""
        })
        .sort((currentJob, nextJob) => {
          switch (sortingParameter) {
            case "price":
              return currentJob.price - nextJob.price
            default:
              return currentJob.name.localeCompare(nextJob.name)
          }
        })
        .sort(() => {
          if (order === "asc") {
            return 0
          } else {
            return -1
          }
        })
        .map(job => {
          return <Card key={job.id} job={job} />
        })}
</ListContainer>
          
      <Feature/>
      
    </Router>
  );
}

export default App;
