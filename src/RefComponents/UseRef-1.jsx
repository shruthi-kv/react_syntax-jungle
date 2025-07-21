
import {useState, useRef} from 'react';
import ChildComponent from './ChildComponent'

const UseRefExample = () => {

   
    const inputRef = useRef();

    const onSubmit = () =>{
        inputRef.current.focus()

    }

    return (
        <>
        <ChildComponent ref={inputRef}/>
        <button onClick ={onSubmit}>Focus</button>
        </>
    )
}

export default UseRefExample;
