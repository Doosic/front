import {useState, useRef} from 'react';

const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [renderer, setRenderer] = useState(0);
  let countVar = 0;

  // State의 값이 변화될 때 마다 Ref()는 리렌더링된다.
  console.log('Ref() 렌더링')

  // Ref는 내부적으로는 값이 변화하나 화면에 리렌더링이 일어나지 않는다.
  console.log(countRef);

  const increaseCountState = () => {
    setCount(count + 1);
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  }

  // 화면 렌더링시 countVar값은 초기화된다.
  // 렌더링시에는 Ref() 함수가 다시 실행되기 때문에 countVar의 이전 생명주기는 종료되고 새로운 값이 할당된다.
  // 즉, 초기값인 0이된다는 말이다.
  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log('countVar: ', countVar);
  }

  const doRendering = () => {
    setRenderer(renderer + 1);
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-zinc-100 flex flex-col space-y-2">
        <span>State: {count}</span>
        <button className="border border-zinc-400 px-2 py-1" onClick={increaseCountState}>State Update</button>

        <span>Ref: {countRef.current}</span>
        <button className="border border-zinc-400 px-2 py-1" onClick={increaseCountRef}>Ref Update</button>

        <span>CountVar: {countVar}</span>
        <button className="border border-zinc-400 px-2 py-1" onClick={increaseCountVar}>Var Update</button>

        <button className="border border-zinc-400 px-2 py-1" onClick={doRendering}>doRendering</button>
      </div>

      <div className="bg-blue-100 flex flex-col space-y-2">

      </div>
    </div>
  )
}

export default Ref;