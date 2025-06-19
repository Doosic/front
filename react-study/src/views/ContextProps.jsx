import {useState} from 'react'
import ContextPropsPage from "../component/context-props/ContextPropsPage.jsx";

/*
 * Props Drilling 예제
 * props를 이용해서 데이터를 전달하다보면, 해당 데이터가 필요치 않은 컴포넌트가
 * 하위 컴포넌트의 필요성으로 인해 상태를 전달받아야 하는 경우가 생긴다.
 * 이를 깊게 파고들수록 데이터의 흐름이 복잡해져 유지보수가 굉장히 힘들어진다.
 * */
const ContextProps = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ContextPropsPage isDark={isDark} setIsDark={setIsDark}></ContextPropsPage>
  )
}

export default ContextProps