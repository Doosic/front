import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    // setInternal 함수는 정리가 필요하다.
    // return 값으로 함수를 내보내고, 함수 안에서 정리작업을 해야한다.
    const timer = setInterval(() => {
      console.log("타이머 동작중...")
    }, 1000)

    return () => {
      clearInterval(timer);
      console.log('타이머 종료')
    }
  }, [])

  return (
    <div className="bg-blue-100">
      <span>타이머를 시작합니다. 콘솔을 확인해주세요</span>
    </div>
  )
}

export default Timer