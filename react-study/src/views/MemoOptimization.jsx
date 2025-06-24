import { useState, useMemo, useCallback } from 'react';
import MemoOptChild from "../component/memo/MemoOptChild.jsx";

const MemoOptimization = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  // 부모 컴포넌트 변경 시, child 까지 렌더링 될 필요가 없다.
  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  }

  console.log('부모 컴포넌트 렌더링.');

  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동"
    }
  }, []);

  // tellMe 함수는 객체다. (일급함수: 변수에 값으로서 할당될 수 있다.)
  // useCallback : 함수 캐싱
  const tellMe = useCallback(() => {
    console.log('길동아 사랑해!')
  }, []);

  return (
    <div className="flex flex-col border border-zinc-400 p-2 space-y-4">
      <div className="text-2xl">부모</div>
      <p>age: {parentAge}</p>
      <button className="border border-zinc-400 px-2 py-1" onClick={incrementParentAge}>부모 나이 증가</button>

      {/*
        MemoOptChild 컴포넌트는 memo를 적용하여, props가 업데이트 될 때 재렌더링 된다.
        ** useMemo는 props에 의존한다 **

        - 주의(useMemo 사용시, 원시타입: 값 변경 체크, 객체: 참조값 체크)
        우리가 props로 전달하는 변수가 원시타입이 아닌, 객체라면 매번 새롭게 렌더링된다.
        객체는 값 그 자체를 가지고있는 것이 아닌, 참조값을 가지고있기에 렌더링이 될 때 마다
        새로운 오브젝트를 생성하여 "참조값이 변하기 때문"이다.

        이때는 props로 넘기는 값 또한 useMemo를 사용하여 캐시해줘야 한다.
      */}
      <MemoOptChild name={name}/>

      {/*
        - callback 함수 : 다른 함수에 전달인자로 전달하는 함수를 콜백 함수라고 한다.

        props로 넘겨진 callback 함수는 객체이다. 즉, 부모컴포넌트의 재렌더링시 참조값이 변한다는 말이다.
        때문에 자녀 컴포넌트에 memo를 사용했지만, props 값이 변하기 때문에 자녀 컴포넌트도 리렌더링된다.

        이때는 props로 넘겨지는 함수를 useCallback을 사용하여 캐시해줘야 한다.
        <MemoOptChild name={name} tellMe={tellMe}/>
      */}
    </div>
  )
}

export default MemoOptimization
