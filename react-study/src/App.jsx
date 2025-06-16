import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import State from "./views/State.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="state" element={<State/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
