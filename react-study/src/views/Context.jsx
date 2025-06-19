import {useState} from 'react'
import ContextPage from "../component/context/ContextPage.jsx";
import { ThemeContext } from "../context/ThemeContext.js";

/*
 * Context 예제
 * props로만 데이터를 전달할 때 생기는 문제인 Props Drilling을 Context를 사용해 해결할 수 있다.
 * Context provider의 하위 컴포넌트들은 데이터를 전역적으로 공유받을 수 있다.
 * 다만 Context Provider의 하위에서만 동작할 수 있기 때문에, 해당 Context가 없는 환경에서는
 * 독립적으로 사용하기 어려워진다. 즉, 컴포넌트의 재사용성이 떨어진다는 것이다.
 * */
const ContextProps = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <ContextPage/>
    </ThemeContext.Provider>
)
}

export default ContextProps