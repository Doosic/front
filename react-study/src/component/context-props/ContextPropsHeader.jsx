
const ContextPropsHeader = ({ isDark }) => {

  return (
    <header
      className="px-2 py-1 flex justify-center"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <div className="flex flex-col">
        <div className="text-xl">Welcome React!</div>
        <div className="text-xl">프롭스를 사용한 상태 전달</div>
      </div>
    </header>
  )
}

export default ContextPropsHeader