import React, {useContext} from "react";
import { AppContext } from "../Application/Provider";

const ShowState=()=>{
    const [state, useStae] = useContext(AppContext);

    return(
        <div>
            <p>{state.name}</p>
            <p>{state.surnmae}</p>

        </div>
    )
}

export default ShowState;