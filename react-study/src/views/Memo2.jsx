import {useEffect, useMemo, useState} from 'react';

// 어떤 상황에서 사용하면 좋을까? 예제 2
const Memo2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  /* location 이라는 오브젝트는 이 상태로 사용하게되면
    number의 값과 isKorea의 값이 변할 때 마다 초기화된다.
    객체이므로 새로운 참조객체가 계속 생성된다는 것이다. */
  /*const location = {
    country: isKorea ? '한국' : '외국',
  };*/

  // isKorea라는 값이 바뀔때만 변경하도록
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    }
  }, [isKorea]);

  // useMemo 사용 전 location 을 등록해둠으로써 location 값이 재랜더링으로 인해 변할때마다 console을 찍도록
  useEffect(() => {
    console.log('useEffect 호출!!');
  }, [location])

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-2xl">하루에 몇끼 먹어요?</div>
      <div className="flex mb-6">
        <input
          className="px-2 py-1 border border-zinc-400"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <hr/>

      <div className="flex flex-col space-y-4">
        <div className="text-2xl">어느 나라에 있어요?</div>
        <div className="text-md">나라: {location.country}</div>
        <button className="px-2 py-1 border border-zinc-400" onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
      </div>

    </div>
  )
}

export default Memo2