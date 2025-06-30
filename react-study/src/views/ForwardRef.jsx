import {useRef} from "react";
import MyInput from "../component/forward-ref/MyInput.jsx";

const ForwardRef = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col p-2 space-y-2">
      {/*
        자식의 DOM 요소에 접근
        react 19v 부터는 Ref를 컴포넌트의 Prop으로 전달할 수 있게 되었다.
      */}
      <MyInput ref={inputRef}/>
      <button className="px-2 py-1 border border-zinc-400" onClick={focus}>집중</button>
    </div>
  )
}

export default ForwardRef