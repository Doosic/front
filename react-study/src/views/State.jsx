import {useState} from 'react';

const heavyWork = () => {
  console.log('무거운 작업!!');
  return ['홍길동', '김민수'];
}

const State = () => {
  const [time, setTime] = useState(1);
  // 값을 바로 리턴해주게 된다면 계속해서 렌더링이된다.
  // const [names, setNames] = useState(heavyWork());
  // callback 형태로 리턴해준다면 최초 1회 렌더링 동작만 하게된다.
  const [names, setNames] = useState(() => {
    return heavyWork();
  })

  const [input, setInput] = useState('');

  const handleClick = () => {
    setTime(time + 1);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState]
    })
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-zinc-100 flex flex-col space-y-2">
        <div>시간 값 업데이트 예제</div>
        <span>현재 시각: {time}시</span>
        <button onClick={handleClick} className="border border-zinc-400 px-2 py-1">Update</button>
      </div>
      
      <div className="bg-blue-100 flex flex-col space-y-2">
        <div>인풋값 입력 예제</div>
        <input className="border border-zinc-400 px-2 py-1" placeholder="이름입력" type="text" value={input} onChange={handleInputChange}/>
        <button className="border border-zinc-400 px-2 py-1" onClick={handleUpload}>Update</button>
        {names.map((name, idx) => {
          return <p key={idx}>{name}</p>
        })}
      </div>
    </div>
  )
}

export default State;