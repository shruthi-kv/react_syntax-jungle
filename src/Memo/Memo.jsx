import {useState, useMemo} from 'react';

const Memo =() =>{
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const IncrementCount1 = () =>{
       
        setCount1(prev=>prev+1);
    }
    const IncrementCount2 = () =>{
        setCount2(prev => prev+1)
    }
    

    const isEven = useMemo(() =>{
      let i=0;
        while( i < 900000000) i++;
        return count1 % 2 === 0;
    },[count1])


    return(
        <>
        <p>{count1}</p>
        <button onClick={IncrementCount1}>Count1</button>
       <span>{ isEven ? 'Even' : 'ODD'}</span>
        <p>{count2}</p>
        <button onClick={IncrementCount2}>Count2</button>
        </>
    )
}

export default Memo;