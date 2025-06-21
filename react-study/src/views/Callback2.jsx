import {useCallback, useState} from "react";
import Box from "../component/callback/Box.jsx";

const Callback2 = () => {

  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  /*
    isDark가 눌렸을때는 memoize된 데이터를 사용하도록
    size값이 변경될 때 마다 style의 값이 변하게된다.
 */
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? 'black' : 'white'
      }}
      className="flex flex-col px-2 py-1 space-y-4">
      <input
        className="px-2 py-1 border border-zinc-400"
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button className="px-2 py-1 border border-zinc-400" onClick={() => setIsDark(!isDark)}>Change Theme</button>

      <Box createBoxStyle={createBoxStyle}></Box>
    </div>
  )
}

export default Callback2