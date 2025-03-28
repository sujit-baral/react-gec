import React, { useState } from "react";
import Header from "./layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MyNavigate from "./components/MyNavigate";
import MyContext from "./components/MyContext";
// import UseState from './components/UseState'
// import MyPropsAndState from './components/MyPropsAndState'

const App = () => {
  // const [name, setName] = useState('Guest');
  // const [role, setRole] = useState('Visitor');
  // const [user, setUser] = useState({name: 'guest', role:'visitor'})

  // const changeParameters = () => {
  //   setName("Sujit");
  //   setRole("Student");
  // }

  return (
    <>
      {/* <MyPropsAndState name={user.name} role={user.role} /> */}
      {/* <button onClick={changeParameters}>Login</button>
      <button onClick={() => { setName('Rohit'); setRole('Captain')}}>Login 2</button>
      <button onClick={()=>{
        setName('Virat');
        setRole('Cricketer')
      }}>Login 3</button>
      <button onClick={() => [setName('Sachin'), setRole('Batsman')]}>Login 4</button>
      <button onClick={() => (setName("Bumrah"), setRole('Bowler'))} >Login 5</button> */}
      {/* <button onClick={() => setUser({name:'Virat', role: "Player"})}>Login 6</button> */}

      {/* <UseState /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/mypath" element={<MyNavigate />} />
          <Route path="/mycontext" element={<MyContext />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
