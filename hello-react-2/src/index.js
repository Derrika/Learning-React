import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
 <App />,
  document.getElementById('root')
);





//import React, {useState, useEffect, useReducer} from 'react';
/* function App({}){
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");

  return (
    <><div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year!</button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Rachel")}>
          New Manager
        </button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Open")}>
          Open
        </button>
        <button onClick={() => setStatus("Back is 5")}>
          Break
        </button>
        <button onClick={() => setStatus("Closed")}>
          Closed
        </button>
      </div></>
  )
} */


/* function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
    <input 
      type="checkbox" 
      value={checked} 
      onChange={() => 
        setChecked(checked => !checked)
      }
    />
    {checked ? "checked" : "not checked"}
    </>
  )
} */

/* useEffect 
 function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);

  return (
    <>
      <br/>
      <label>
        Favourite Phrase:
        <input type="text" value={val}
        onChange={(e) => setVal(e.target.value)}
        />
      </label>
      <br/>
      <br />
      <label>
      Second Favourite Phrase:
      <input type="text" value={val2}
      onChange={(e) => setVal2(e.target.value)}
      />
    </label>
    </>
  )
} */


/* //Fetch Data
function GitHubUser({login}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

/*   if(data) {
    return <div>{JSON.stringify(data)}</div>
  } 

  if(data) {
    return (
      <div>
        <h2>{data.login}</h2>
        <img src={data.avatar_url} width={100}/>
      </div>
    )
  }
  return null;
}

function App() {
  return <GitHubUser login="eveporcello" />
}

*/


/* //useReducer 
function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked, false
  );

  return (
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={toggle}
      />
      
      {checked ? "checked" : "not checked"}
    </>
  )
} */





