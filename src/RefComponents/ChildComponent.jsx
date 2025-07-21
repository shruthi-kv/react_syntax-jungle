import { useState, forwardRef } from 'react'

const ChildComponent = forwardRef( ({}, ref) => {

    const [name, setName] = useState('');

    return (
        <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
    )
})

export default ChildComponent;