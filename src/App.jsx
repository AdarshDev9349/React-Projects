import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Apifetch from './components/apifetch'
import Counter from './components/counter'
import Todolist from './components/todolist'
import Accordion from './components/accordion';

const Navigation = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    
    display: "flex",
    
  };

  return (
    <div style={{ display:'flex',justifyContent:'center',alignItems:'center',height:'100vh' }}>
      <button style={buttonStyle} onClick={() => navigate("/counter")}>Counter</button>
      <button style={buttonStyle} onClick={() => navigate("/todo")}>Todo List</button>
      <button style={buttonStyle} onClick={() => navigate("/api")}>API Fetch meals</button>
      <button style={buttonStyle} onClick={() => navigate("/accordion")}>Accordion</button>
    </div>
  );
};
const Goback =()=>{
  const navigate = useNavigate();
  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return(
    <button onClick={()=>navigate("/")} style={buttonStyle}>Go back</button>
  )
}

function App() {
  return (
    <Router>
       <Goback/>
    
      <Routes>
        
        <Route path="/" element={<Navigation />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/api" element={<Apifetch />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    
    </Router>
    
  );
}

export default App;
