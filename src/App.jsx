
import './App.css';
// import ParentComponent from './RefComponents/ParentComponent'
import UseRefExample from './RefComponents/UseRef-1'
import Parent from './RefComponents/FR_parent'
import User from './HOC/user';
import withLoader from './HOC/withLoader'; 
import Place from './HOC/place'


function App() {

  const UserWithLoader = withLoader(User);
  const PLaceWithLoader = withLoader(Place)

  return (

    // <ParentComponent/>
    // <UseRefExample/>
    // <Parent/>
    //  <UserWithLoader/>
    <PLaceWithLoader/>

  
  )
}

export default App
