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
import Context from "./views/Context.jsx";
import ContextProps from "./views/ContextProps.jsx";
import Memo from "./views/Memo.jsx";
import Memo2 from "./views/Memo2.jsx";
import Callback from "./views/Callback.jsx";
import Callback2 from "./views/Callback2.jsx";

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
          <Route path="context" element={<Context/>}></Route>
          <Route path="context-props" element={<ContextProps/>}></Route>
          <Route path="memo" element={<Memo/>}></Route>
          <Route path="memo-2" element={<Memo2/>}></Route>
          <Route path="callback" element={<Callback/>}></Route>
          <Route path="callback-2" element={<Callback2/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
