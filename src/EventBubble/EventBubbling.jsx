

const EventBubbling = () => {
    return (
        <div style={{ height: "300px", width: "300px", border: "2px solid black", fontSize: '16px' }} onClick={() => console.log("Grand-Parent")}>

            <div style={{ height: '200px', width: "200px", border: "2px solid black", margin: "40px" }} onClick={() => console.log("Parent")}>
                <div style={{ height: "100px", width: "100px", border: "2px solid black", margin: "40px" }} onClick={(e) => { e.stopPropagation(); console.log("Child") }}>

                </div>
            </div>
        </div>
    )
}

export default EventBubbling;