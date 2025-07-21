import React from 'react'
const ButtonComp =({increment,name}) => {
     console.log("button rendered", name)
    return (
        <>
        <button onClick={increment}>{name}</button>
        </>

    )
}

export default React.memo(ButtonComp);
