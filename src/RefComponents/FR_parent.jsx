
import {useRef} from 'react';
import Child from './FR_child'

const Parent = () =>{

    const inputRef = useRef();

    const onSubmit = () =>{
        inputRef.current.focus()

    }
   
    return (
        <>
        <Child ref = {inputRef}/>
        <button onClick={onSubmit}>Submit</button>
        </>
    )
}

export default Parent;
