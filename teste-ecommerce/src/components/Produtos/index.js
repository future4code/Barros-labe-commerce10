import { CardContainer, CardFooter, CardContent } from "./Style";

export function Card(props) {
   return <CardContainer>
      <img src={props.job.img}/>
      <h2 title={props.job.name}>
        <b> {props.job.name} </b>
      </h2>
      <CardContent>
         {props.job.desc}
      </CardContent>
      <CardFooter>
         <span>&#128176; R$ {props.job.price.toFixed(2).replace(".", ",")}</span>
      </CardFooter>
   </CardContainer>
}

export default Card