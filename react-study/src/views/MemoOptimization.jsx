import { useState, useMemo } from 'react';
import MemoOptChild from "../component/memo/MemoOptChild.jsx";

const MemoOptimization = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  // 부모 컴포넌트 변경 시, child 까지 렌더링 될 필요가 없다.
  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  }

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  }

  console.log('부모 컴포넌트 렌더링.')

  return (
    <div className="flex flex-col border border-zinc-400 p-2 space-y-4">
      <div className="text-2xl">부모</div>
      <p>age: {parentAge}</p>
      <button className="border border-zinc-400 px-2 py-1" onClick={incrementParentAge}>부모 나이 증가</button>
      <button className="border border-zinc-400 px-2 py-1" onClick={incrementChildAge}>자녀 나이 증가</button>
      <MemoOptChild name={'홍길동'} age={childAge}/>
    </div>
  )
}

export default MemoOptimization
