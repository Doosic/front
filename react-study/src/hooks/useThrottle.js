import {useRef} from "react";

export function useThrottle(callback, delay) {
  // 마지막 호출 기록을 저장할 변수
  const lastRun = useRef(Date.now());

  return () => {
    // 1초의 시간 계산 -> 마지막 호출 후, 1초 이상 지나지 않았다면 함수 호출 불가
    // 광클 방지!!!
    const timeElapsed =  Date.now() - lastRun.current;

    if(timeElapsed >= delay){
      callback();
      lastRun.current = Date.now();
    }
  }
}