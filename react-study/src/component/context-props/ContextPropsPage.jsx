import ContextPropsHeader from "./ContextPropsHeader.jsx";
import ContextPropsContent from "./ContextPropsContent.jsx";
import ContextPropsFooter from "./ContextPropsFooter.jsx";

const ContextPropsPage = ({ isDark, setIsDark }) => {

  // ContextPropsPage 컴포넌트는 isDark라는 props 데이터를 사용하지 않는다.
  // 그러나 하위 컴포넌트들의 필요에의해 알고있어야 한다. Context를 사용하여 문제를 개선할 수 있다.
  return (
    <div className="flex flex-col">
      <ContextPropsHeader isDark={isDark} />
      <ContextPropsContent isDark={isDark} />
      <ContextPropsFooter isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default ContextPropsPage