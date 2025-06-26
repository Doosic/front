// fetch api를 이용해 데이터를 호출하는 Hook
import {useFetch} from "../hooks/useFetch.js";

const baseUrl = "https://jsonplaceholder.typicode.com"

const CustomHooks2 = () => {
  const { data: userData } = useFetch(baseUrl, 'users');
  const { data: postData } = useFetch(baseUrl, 'posts');

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-2xl font-bold">useFetch</div>
      {/*<button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={() => fetchUrl('users')}>Users</button>*/}
      {/*<button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={() => fetchUrl('posts')}>Posts</button>*/}
      {/*<button className="px-2 py-1 border border-zinc-400 cursor-pointer" onClick={() => fetchUrl('todos')}>Todos</button>*/}

      <div className="text-2xl">User</div>
      {userData &&
        <pre>{JSON.stringify(userData[0], null, 2)}</pre>
      }
      <div className="text-2xl">Post</div>
      {postData &&
        <pre>{JSON.stringify(postData[0], null, 2)}</pre>
      }
    </div>
  )
}

export default CustomHooks2