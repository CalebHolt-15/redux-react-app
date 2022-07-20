import { useSelector, useDispatch } from "react-redux"
import {actions} from "./store.js/index"

function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  
//dispatch(action)
//(action: type, payload)
  const Increment = () => {
    dispatch(actions.increment())
  }

  const Decrement = () => {
    dispatch(actions.decrement())
  }

  const AddBy = () => {
    dispatch(actions.addBy(10))
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