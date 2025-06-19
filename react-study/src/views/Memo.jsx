import {useMemo, useState} from 'react';

const hardCalculate = (number) => {
  console.log("어려운 계산 작업")
  for (let i = 0; i < 999999999; i++){}
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log('쉬운 계산');
  return number + 1;
}

/*
  쉬운 계산기의 숫자만 업데이트하면 될 것 같지만, 함수형 컴포넌트는 재렌더링되기 때문에
  어려운 계산기도 함께 동작하여 오랜 시간이 걸리게된다.

  이런때는 easyNumber를 계산할때는 hardNumber는 계산되지 않게하는건 어떨까...?
  이런때 useMemo를 사용한다.
 */
const Memo = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-2xl">어려운 계산기</div>
      <div className="flex mb-6">
        <input
          className="px-2 py-1 border border-zinc-400"
          type="number"
          value={hardNumber}
          onChange={(e) => setHardNumber(e.target.value)}
        />
        <span className="px-2 py-1 border border-zinc-400"> + 10000 = {hardSum}</span>
      </div>

      <div className="text-2xl">쉬운 계산기</div>
      <div className="flex">
        <input
          className="px-2 py-1 border border-zinc-400"
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(e.target.value)}
        />
        <span className="px-2 py-1 border border-zinc-400"> + 10000 = {easySum}</span>
      </div>
    </div>
  )
}

export default Memo