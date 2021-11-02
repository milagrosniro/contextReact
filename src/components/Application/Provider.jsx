import React, {createContext, useState} from "react";

const MyProvider = (props)=>{
    const [state, setState] = useState({});

    return(
        <div>
            <AppContext.Provider value={[state,setState]}
            >
            {/* estos hijos van a compartir el estado state, gracias a que estan encerrados en el Provider */}
                {props.children}
            </AppContext.Provider>
        </div>
    )
}
 export default MyProvider;
 export const AppContext= createContext()