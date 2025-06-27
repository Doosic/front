/*
* useEffect와 useLayoutEffect의 차이점
* - useEffect: 화면 렌더링 후 실행
* - useLayoutEffect: effect 실행 후 화면 업데이트
* */
import {useEffect, useLayoutEffect, useState} from 'react';

// 문서참조: https://ko.react.dev/reference/react/useLayoutEffect
const LayoutEffect = () => {
  const [count, setCount] = useState(0);

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  // component가 화면에 그려진 이후 실행 => 비동기적으로 실행/다른 동작을 블로킹하지 않는다.
  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  // component가 화면에 그려지기 이전에 실행 => 동기적으로 실행/다른 동작들을 블로킹한다. 화면 렌더링을 블로킹한다.
  useLayoutEffect(() => {
    console.log("useLayoutEffect", count);
  }, [count]);

  return(
    <div className="flex flex-col space-y-2">
      <div className="text-2xl">Count: {count}</div>
      <button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={handleCountUpdate}>Update</button>
    </div>
  )
}

export default LayoutEffect