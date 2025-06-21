import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {

    return (
        <div>
            <header className="flex px-2 py-4 space-x-4 h-20 items-center">
              <p className="text-3xl">React-study</p>
              <Link to="/state">useState</Link>
              <Link to="/ref">useRef</Link>
              <Link to="/ref-dom">useRef-DOM</Link>
              <Link to="/effect">useEffect</Link>
              <Link to="/effect-cleanup">useEffect-cleanup</Link>
              <Link to="/context">context</Link>
              <Link to="/context-props">context-props</Link>
              <Link to="/memo">Memo</Link>
              <Link to="/memo-2">Memo2</Link>
              <Link to="/callback">Callback</Link>
              <Link to="/callback-2">Callback2</Link>
            </header>

          <div className="px-2 py-4">
            <Outlet />
          </div>
        </div>
    )
}

export default AppLayout