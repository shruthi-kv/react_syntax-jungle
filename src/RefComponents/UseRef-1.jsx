
import {useState, useRef} from 'react';

const UseRefExample = () => {

    const [name, setName] = useState('');
    const inputRef = useRef();

    const onSubmit = () =>{
        inputRef.current.focus()

    }


    return (
        <>
        <input  ref = {inputRef} value={name} onChange = {e=> setName(e.target.value)} />
        <button onClick ={onSubmit}>Focus</button>
        </>
    )
}

export default UseRefExample;
