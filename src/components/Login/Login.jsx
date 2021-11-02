import React,{useRef, useContext} from "react";
import { AppContext } from "../Application/Provider";


const LogIn=()=>{
    let nom = useRef(null);
    let ape = useRef(null);


  //acceden al estado compartido mediante useContext
    const state= [state, setState] = useContext(AppContext)

    return(
        //recibe un valor por input y ese valor va a estar en estado global, es decir disponible para los demas componentes
        <div>

            <input type="text" ref={nom}
            onChange={()=>{setState({...state,name:nom.current.value})}}></input>

<input type="text" ref={ape}
            onChange={()=>{setState({...state,surname:ape.current.value})}}></input>
        </div>
    )
}

export default LogIn;