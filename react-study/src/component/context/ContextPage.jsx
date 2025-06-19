import ContextHeader from "./ContextHeader.jsx";
import ContextContent from "./ContextContent.jsx";
import ContextFooter from "./ContextFooter.jsx";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.js";

const ContextPage = () => {
  const data = useContext(ThemeContext);
  console.log(data);

  return (
    <div className="flex flex-col">
      <ContextHeader/>
      <ContextContent/>
      <ContextFooter/>
    </div>
  )
}

export default ContextPage