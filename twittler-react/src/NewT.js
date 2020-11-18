
function NewT(props)  {
    return(
      <div style = {{textAlign:"left"}}>
         <ul>
           <li>{props.name} </li>
           <li>{props.date} </li>
           <li>{props.text} </li>
           <hr/>
         </ul>
      </div>
    )
}

export default NewT