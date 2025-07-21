import {useState, useCallback} from 'react'
import Tile from './Tile'
import Count from './Count'
import ButtonComp from './Button'

const ParentComp = () =>{

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(1000)

    const incrementAge = useCallback(() =>{
        setAge(age=> age+1)
    },[age])

    const incrementSalary = useCallback( () =>{
        setSalary(salary=> salary+1)
    },[salary])


    return(
        <>
        <Tile/>
        <Count  type={'age'} value={age}/>
        <ButtonComp increment = {incrementAge}  name ={'Increment Age'}/>
        <Count  type={'salary'} value={salary}/>
        <ButtonComp increment = {incrementSalary}  name ={'Increment Salary'}/>
        </>
    )
}

export default ParentComp;
