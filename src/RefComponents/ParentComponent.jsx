import {useState, useEffect, useRef} from 'react'
const ParentComponent = () =>{
    const [name,setName] = useState();
    const renderCount = useRef(0)


    useEffect(()=>{
        renderCount.current ++;
    })

    return (
        <>
        <input value={name} onChange ={(e)=> setName(e.target.value)} />
        <p>Name is {name}</p>
        <p>Component is rendered {renderCount.current} times</p>
        </>
    )
}

export default ParentComponent;
