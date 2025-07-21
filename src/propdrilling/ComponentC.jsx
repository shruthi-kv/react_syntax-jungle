
import {useContext} from 'react';
import {userContext} from './ComponentA';


const ComponentC = () =>{

    const userName = useContext(userContext)
    console.log(userName)

    return(
        <p>Hello {userName}</p>
    )
}

export default ComponentC;