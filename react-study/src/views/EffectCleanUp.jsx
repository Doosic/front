import {useState} from "react";
import Timer from "../component/Timer.jsx";

const EffectCleanUp = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button className="border border-zinc-400 px-2 py-1" onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
}

export default EffectCleanUp