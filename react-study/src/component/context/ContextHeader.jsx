import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.js";

const ContextHeader = () => {
  const {isDark} = useContext(ThemeContext);

  return (
    <header
      className="px-2 py-1 flex justify-center"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <div className="flex flex-col">
        <div className="text-xl">Welcome React!</div>
        <div className="text-xl">컨텍스트를 사용한 상태 전달</div>
      </div>
    </header>
  )
}

export default ContextHeader