import React from 'react'
const Count = ({type,value}) =>{
    console.log("Count rendered", type)
    return(
        <>{type} - {value}</>

    )

}

export default React.memo(Count);