import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {

    return (
        <div>
            <header className="flex flex-col px-2 py-4 space-y-6">
              <p className="text-3xl">React-study</p>
              <div className="flex space-x-2">
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/state">useState</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/ref">useRef</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/ref-dom">useRef-DOM</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/effect">useEffect</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/effect-cleanup">useEffect-cleanup</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/context">context</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/context-props">context-props</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/memo">Memo</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/memo-2">Memo2</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/callback">Callback</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/callback-2">Callback2</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/reducer">Reducer</Link>
                <Link className="border border-zinc-400 rounded-xl px-1 py-1" to="/reducer-2">Reducer2</Link>
              </div>
            </header>

          <div className="px-2 py-4">
            <Outlet />
          </div>
        </div>
    )
}

export default AppLayout