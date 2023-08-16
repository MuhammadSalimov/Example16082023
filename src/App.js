import React, { useState } from "react";
import Menu from "./Menu";
import Data from "./Data";
import "./App.css";

function App() {
  const [state , setState] =useState(Data)
  const [newState , setNewState] = useState(Data)
  
  const All =()=>{
    setNewState(Data)
  }

  const Breakfast = ()=>{
    const BR = state.filter((item) =>{
      return item.category ==="breakfast"
    })
    setNewState(BR)
  }

  const Lounch = ()=>{
    const LN = state.filter((item) =>{
      return item.category === "lunch"
    })
    setNewState(LN)
  }

  const Shakes =()=>{
    const SHK = state.filter((item)=>{
      return item.category === "shakes"
    })
    setNewState(SHK)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <section className="btn-container">
          <button onClick={All} className="filter-btn">All</button>
          <button onClick={Breakfast} className="filter-btn">breakfast</button>
          <button onClick={Lounch} className="filter-btn">lunch</button>
          <button onClick={Shakes} className="filter-btn">shakes</button>
        </section>
        <div className="section-center">
          <Menu Info={newState} />
        </div>
      </section>
    </main>
  );
}

export default App;
