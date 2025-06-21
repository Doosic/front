import {useEffect, useState} from "react";

const Box = ({
  createBoxStyle,
             }) => {
  const [style, setStyle] = useState({});

  // props으로 보내주는 함수가 변경된다면, style 값 변경
  useEffect(() => {
    console.log('박스 키우기');
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return (
    <div
      style={style}
    ></div>
  )
}

export default Box