import { useSelector,useDispatch } from "react-redux"

function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  

  const Increment = () => {
    dispatch({type: "INCREMENT"})
  }

  const Decrement = () => {
    dispatch({type: "DECREMENT"})
  }

  const AddBy = () => {
    dispatch({type: "ADDBY", payload: 10})
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={AddBy}>AddBy</button>
   </div>
  );
}

export default App;

//ljhojlhkjhkhkjascvddvdsvdvsdxzcz
