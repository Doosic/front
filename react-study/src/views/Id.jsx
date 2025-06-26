import {useId} from 'react';

const Id = () => {
  /*
    - useId로 생성한 id는 input과 같은 form 요소에 접근할 때 유용하다.
    - useId의 value값은 양쪽에 ":r0:" 과 같이 쌍점을 제공한다.
    쌍점을 제공하는 이유는 querySelector()과 같은 함수로 이용하지 못하게하기 위해서다.
    보안적 문제가 아닌, useRef()라는 이미 훌륭한 함수가 있으므로
    react를 더 사용하게 하기 위해서다.
  */

  // const id = useId();

  return (
    <div className="flex flex-col space-y-2">
      <MyInput/>
    </div>
  )
}

function MyInput() {
  // 각 컴포넌트마다 고유한 ID를 가질 수 있다.
  const id = useId();
  return (
    <div className="flex space-x-2 items-center">
      <label htmlFor={id}>이름</label>
      <input id={id} className="px-2 py-1 border border-zinc-400"/>

      {/*<label htmlFor={`${id}-age`}>나이</label>*/}
      {/*<input id={`${id}-age`} className="px-2 py-1 border border-zinc-400"/>*/}
    </div>
  )
}

export default Id;