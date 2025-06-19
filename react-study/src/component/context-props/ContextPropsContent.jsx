
const ContextPropsContent = ({ isDark }) => {

  return (
    <div
      className="px-2 py-1 flex justify-center"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p>React 사용학습입니다!!!</p>
    </div>
  )
}

export default ContextPropsContent