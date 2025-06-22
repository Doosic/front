import {useState, useReducer} from 'react';
import Student from "../component/reducer/Student.jsx";

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

// state를 업데이트하는 모든 행위들을 reducer 안에서 제어할 수 있다.
const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'delete-student':
      return {
        count: state.count -1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        )
      };
    case 'mark-student':
      return{
        count: state.count,
        students: state.students.map((student) => {
          if(student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
    })}
    default:
      return state;
  }
};
const initialState = {
  count: 0,
  students: []
}

const Reducer2 = () => {
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-2xl">출석부</div>
      <p>총 학생 수: ?</p>

      <input
        className="px-2 py-1 border border-zinc-400"
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="px-2 py-1 border border-zinc-400 bg-blue-500 text-white"
        onClick={() => {
          dispatch({type: 'add-student', payload: {name} })
        }}
      >
        추가
      </button>

      {studentInfo &&
          studentInfo.students.map((student) => {
          return (
            <Student
              key={student.id}
              name={student.name}
              dispatch={dispatch}
              id={student.id}
              isHere={student.isHere}
            />
          )
        })}
    </div>
  )
}

export default Reducer2