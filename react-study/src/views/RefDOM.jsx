import {useEffect, useRef} from "react";

const RefDOM = () => {
  // useRef와 태그의 ref props를 통해서 해당 태그의 참조를 가져올 수 있다.
  const inputRef = useRef(null);

  useEffect(() => {
    // dom에 접근하여 focus 함수 실행
    inputRef.current.focus();
    console.log(inputRef)
  })

  return (
    <div className="flex flex-col space-y-4">
      <input ref={inputRef} className="border border-zinc-400 px-2 py-1" type="text" placeholder="userName"/>
      <button className="border border-zinc-400 px-2 py-1">로그인</button>
    </div>
  )
}

export default RefDOM