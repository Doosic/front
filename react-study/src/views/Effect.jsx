import {useEffect, useState} from "react";

const heavyWork = () => {
  console.log('무거운 작업!!');
  return ['홍길동', '김민수'];
}

const Effect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  // 렌더링 될때마다 매번 실행
  useEffect(() => {
    console.log('렌더링')
  })

  // 마운트 + [item] 변경 시 실행
  useEffect(() => {
    console.log('name 변화')
  }, [name])

  // 마운트시 1회 실행
  useEffect(() => {
    console.log('최초 1회 실행')
  }, [])

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-zinc-100 flex flex-col space-y-2">
        <span>count: {count}</span>
        <button className="border border-zinc-400 px-2 py-1" onClick={handleCountUpdate}>Update</button>
        <span>name: {name}</span>
        <input className="border border-zinc-400 px-2 py-1" type="text" value={name} onChange={handleInputChange}/>
      </div>

      <div className="bg-blue-100 flex flex-col space-y-2">

      </div>
    </div>
  )
}

export default Effect