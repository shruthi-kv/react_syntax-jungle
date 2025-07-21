import React from 'react'
const Tile = () =>{
         console.log("tile rendered")
    return(
        <>
        <p>UseCallback Hook Demo</p>
        </>
    )
}

export default React.memo(Tile);