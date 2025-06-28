import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce.js";

function fetchDataFromServer(value) {
  if(!value){
    return [];
  }

  console.log('서버로부터 데이터를 가져오는중...');

  const users = [
    {name: "김철수", age: "16"},
    {name: "이영희", age: "26"},
    {name: "김민수", age: "15"},
    {name: "홍길동", age: "20"},
    {name: "홍민영", age: "45"},
    {name: "김민영", age: "32"},
  ]

  return users.filter((user) => user.name.startsWith(value));
}

const Debounce = () => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 300);
  const [result, setResult] = useState([]);


  useEffect(() => {
    const users = fetchDataFromServer(debouncedInput);
    setResult(users);
  }, [debouncedInput])

  return (
    <div className="">
      <div>
        <div className="text-2xl mb-4 text-blue-500 font-bold">Debounce</div>
        <input
          className="border border-zinc-400 w-[12rem]"
          placeholder="검색어를 입력해주세요."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ul>
          {result.map((user) => (
            <li className="flex justify-between w-[12rem] border border-zinc-300 bg-zinc-200" key={user.name}>
              <span>{user.name}</span>
              <span>{user.age}세</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Debounce