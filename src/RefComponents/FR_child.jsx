import {forwardRef} from 'react';

const Child = forwardRef(({}, ref) =>{
    return (
        <>
         <input ref={ref} />
        </>
    )
})


export default Child;
