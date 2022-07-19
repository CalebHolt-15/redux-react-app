import { useSelector } from "react-redux";

function App() {

  const counter = useSelector(state => state.counter)
  return (
    <div>
      <h1>Counter: {counter}</h1>
   </div>
  );
}

export default App;

//ljhojlhkjhkhkjascvddvdsvdvsdxzcz
