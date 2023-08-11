import {useState} from 'react';
import './App.css';

function App() {
  let [first, setfirst] = useState(0);
  window.addEventListener('message', (event) => {
    if (event.origin === 'http://localhost:3001'){
      if(typeof(event.data)==="number"){
        setfirst(event.data)
      }
      else{
        console.log("Different Data type sucessfull received")
      }
    }
  });
return (
    <div className="App">
      This is a parent
      <h1>{first}</h1>
      <iframe title='ParentFrame' src="http://localhost:3001/"></iframe>
    </div>
  );
}

export default App;
