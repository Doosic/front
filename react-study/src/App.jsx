import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import State from "./views/State.jsx";
import Ref from "./views/Ref.jsx";
import Effect from "./views/Effect.jsx";
import EffectCleanUp from "./views/EffectCleanUp.jsx";
import RefDOM from "./views/RefDOM.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="state" element={<State/>}></Route>
          <Route path="ref" element={<Ref/>}></Route>
          <Route path="effect" element={<Effect/>}></Route>
          <Route path="effect-cleanup" element={<EffectCleanUp/>}></Route>
          <Route path="ref-dom" element={<RefDOM/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
