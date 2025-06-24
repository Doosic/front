import { memo } from 'react';

const MemoOptChild = ({name}) => {
  console.log('자녀 컴포넌트 렌더링.')
  return (
    <div className="flex flex-col border border-zinc-400 p-2 space-y-4">
      <div className="text-2xl">자녀</div>
      <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p>
    </div>
  )
}

export default memo(MemoOptChild)