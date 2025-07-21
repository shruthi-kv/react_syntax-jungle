
import {useState, createContext} from 'react';
import ComponentB from './ComponentB'

export const userContext = createContext();

const ComponentA = () =>{
    const[name, setName] = useState("Shruthi")
    return(
        <userContext.Provider value={name}>
                   <ComponentB/>
        </userContext.Provider>
 
    )
}

export default ComponentA;