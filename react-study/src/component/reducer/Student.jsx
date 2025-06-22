
const Student = ({ name, dispatch, id, isHere }) => {

  return (
    <div className="flex space-x-2 items-center">
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'mark-student', payload: { id } })
        }}
      >{name}</span>
      <button className="px-2 py-1 border border-zinc-400 bg-red-400 text-white" onClick={() => {dispatch({type: 'delete-student', payload: {id}})}}>삭제</button>
    </div>
  )
}

export default Student