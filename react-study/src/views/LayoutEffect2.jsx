import {useEffect, useLayoutEffect, useRef, useState} from 'react';

// 문서참조: https://ko.react.dev/reference/react/useLayoutEffect

function getNumbers() {
  return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
}

const LayoutEffect = () => {
  const [numbers, setNumbers] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const nums = getNumbers();
    setNumbers(nums);
  }, []);

  // component가 그려진 이후에 비동기적으로 실행, 무언가 계산되는 동작이있다면
  // 자연스러운 UI전환이 아닌 끊기듯이 전환이된다.
/*  useEffect(() => {
    if(numbers.length === 0){
      return;
    }

    for(let i = 0; i < 300000000; i++){}

    ref.current.scrollTop = ref.current.scrollHeight;
  }, [numbers]);*/

  // component가 그려지기 이전에 실행되기 때문에 필요한 동작(계산)이 렌더링 전에 실행되기 떄문에
  // 깜빡임이 없다. UI변화를 정교하게 다룰 수 있다.
  // 그러나 모든 계산이 끝나기 전까지 화면이 그려지지않기 때문에 문제가 생길 수 있다.
  useLayoutEffect(() => {
    if(numbers.length === 0){
      return;
    }

    for(let i = 0; i < 300000000; i++){}

    ref.current.scrollTop = ref.current.scrollHeight;
  }, [numbers]);

  return(
    <div
      ref={ref}
      className="h-[300px] p-1 border border-bule-500 overflow-y-auto">
      {numbers.map((number, idx) => <p key={idx}>{number}</p>)}
    </div>
  )
}

export default LayoutEffect