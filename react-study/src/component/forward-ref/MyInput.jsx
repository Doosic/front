import {forwardRef} from "react";

const MyInput = (props, ref) => {
  return <input  ref={ref} className="px-2 py-1 border border-zinc-400"/>
}

// 여기서 감싸는게 더 깔끔한듯...
export default forwardRef(MyInput)