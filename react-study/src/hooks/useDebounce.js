import {useEffect, useState} from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    /*
    * 마지막 호출만 남고 이전 타이머는 모두 취소된다.
    * 1. input이 "ㄱ"으로 바뀐다 -> useEffect 실행 -> 타이머 설정
    * 2. 0.5초 후 input이 "기"로 변경 -> 이때 이전 useEffect의 return 함수가 먼저 호출되어 clearTimeout(timeId) 수행
    * 3. 그 다음에 새로운 useEffect가 "기" 기준으로 실행 -> 새로운 타이머 설정
    * 4. 최종적으로 더 이상 input이 변경되지 않고 1초가 지난 후 콜백 실행
    */
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      // - 컴포넌트 언마운트
      // - 의존성 배열(input)이 바뀌어서 effect 가 다시 실행되기 직전에 cleanup 실행
      clearTimeout(timerId);
    }
  }, [value])

  return debouncedValue;
}