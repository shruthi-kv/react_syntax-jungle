import React, { useEffect, useRef } from 'react';

const EventCapturing = () => {
    const parentRef = useRef(null)
    const childRef = useRef(null);
    useEffect(() => {
        const handleParentClick = () => {
            console.log("parent")
        }
        const handleChildClick = () => {
            console.log('child')
        }
        parentRef.current.addEventListener('click', handleParentClick, true);
        childRef.current.addEventListener('click', handleChildClick)
    }, [])


    return (
        <>
            <div ref={parentRef} style={{ hieght: "200px", width: "200px", border: "2px solid black" }}
            >
                <button ref={childRef}
                >Click Me</button>
            </div>
        </>
    )
}

export default EventCapturing;
