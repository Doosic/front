import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {

    return (
        <div>
            <header className="flex px-2 py-4 space-x-4 h-20 items-center">
              <p className="text-3xl">React-study</p>
              <Link to="/state">useState</Link>
              <Link to="/ref">useRef</Link>
              <Link to="/effect">useEffect</Link>
              <Link to="/effect-cleanup">useEffect-cleanup</Link>
            </header>

          <div className="px-2 py-4">
            <Outlet />
          </div>
        </div>
    )
}

export default AppLayout