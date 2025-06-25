import {useInput} from "../hooks/useInput.js";

function displayMessage(message) {
  alert(message);
}

const CustomHooks = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("안녕",displayMessage);
  // const [inputValue2, handleChange2, handleSubmit2] = useInput("안녕2",displayMessage);

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-2xl font-bold">useInput</div>
      <input
        className="px-2 py-1 border border-zinc-400"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={handleSubmit}>확인</button>

      {/*
        - 같은 형태의 input을 공통적으로, 여러번 재사용 할 수 있다.

        <input
          className="px-2 py-1 border border-zinc-400"
          value={inputValue2}
          onChange={handleChange2}
        />
        <button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={handleSubmit2}>확인2</button>
      */}
    </div>
  )
}

export default CustomHooks