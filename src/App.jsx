
import './App.css'
import MyButton from './components/MyButton/MyButton'

function App() {


 const handleClick = ()=>{
  console.log("You Clicked Me!");
 }

  return (
    <div>
     <MyButton
      text={"Click Me"}
      onClickFunc={handleClick}
      disabled={false} 
      size={"small"}  
      primary={true}
      // bgColor={"yellow"}
      /> 


      
    </div>
  )
}

export default App
