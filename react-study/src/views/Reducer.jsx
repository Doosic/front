import {useState, useReducer} from 'react';

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
const reducer = (state, action) => {
  console.log('reducer가 일을 합니다.', state, action);

  switch(action.type){
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
}

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}

const Reducer = () => {
  const [number, setNumber] = useState(0);
  // useReducer(상태값을 업데이트 할 callback 함수, 초기 상태값)
  // [상태값, 상태값을 업데이트 할 callback 함수]
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-2xl">useReducer 은행에 오신것을 환영합니다</div>
      <p>잔고: {money}원</p>
      {/* input 태그는 step 이라는 props를 통해서 증가 단위를 정할 수 있다. */}
      <input
        className="px-2 py-1 border border-zinc-400"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />

      {/* dispatch(상태값을 업데이트 할 callback 함수)를 통해 예금, 출금 */}
      <button className="px-2 py-1 border border-zinc-400 bg-blue-500 text-white" onClick={() => dispatch({type: ACTION_TYPES.deposit, payload: number})}>예금</button>
      <button className="px-2 py-1 border border-zinc-400 bg-green-500 text-white" onClick={() => dispatch({type: ACTION_TYPES.withdraw, payload: number})}>출금</button>
    </div>
  )
}

export default Reducer