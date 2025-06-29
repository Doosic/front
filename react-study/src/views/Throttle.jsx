import {useRef, useState} from "react";
import {useThrottle} from "../hooks/useThrottle.js";

function hackLottoNumbers() {
  console.log('로또 번호를 해킹하는 아주 무거운 함수 동작!')
  const lottoNumber = [];
  for(let i = 0; i < 6; i++) {
    const number = Math.floor(Math.random() * 45) + 1;
    lottoNumber.push(number);
  }

  return lottoNumber;
}

const Throttle = () => {
  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

  const handleClick = useThrottle(() => {
    const result = hackLottoNumbers();
    setLottoNumbers(result)
  }, 1000);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-6">
      <div className="text-2xl">로또 번호 맞추기</div>
      <button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={handleClick}>
        번호 맞추기
      </button>
      <div className="flex space-x-4">
        {lottoNumbers.map((number, idx) => (
          <div key={idx} className="rounded-full bg-red-500 text-white font-bold p-4">
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Throttle