import {useEffect, useState, useCallback} from "react";

const Callback = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  /* someFunction이 호출되어 Callback 함수가 다시 재렌더링 된다면 새로운 메모리공간에
  someFunction이라는 함수객체가 생성되어 메모리 공간을 낭비할 수 있다.(메모리 주소 변경) */
  /*const someFunction = () => {
    console.log(`someFunc: number ${number}`);
    return;
  }*/

  // 보여주는 값, 즉 return 해주는 값은 memoize 할 때의 숫자를 기준으로 한다.
  // 의존성 배열 안에있는 [number] 의 값이 변할 때 만 초기화된다.
  const someFunction = useCallback(() => {
    console.log(`someFunc: number ${number}`)
    return;
  }, [number]);

  useEffect(() => {
    console.log('someFunction이 변경되었습니다.')
  }, [someFunction])

  return (
    <div className="flex px-2 py-1">
      <input
        className="px-2 py-1 border border-zinc-400"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br/>
      <button className="px-2 py-1 border border-zinc-400" onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>

      <br/>
      <button className="px-2 py-1 border border-zinc-400" onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default Callback