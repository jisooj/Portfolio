import { NavLink } from "react-router";

interface IPageInfo {
  path: string;
  name: string;
}

// TODO: need to move this into routes.ts
const PageInfo: IPageInfo[] = [
  {
    path: "work",
    name: "Work"
  },
  {
    path: "about",
    name: "About"
  },
];

export function NavBar() {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jisue Park</span>
        </a>
        {/* Hamburger button 
          TODO: when visible, show page options
        */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
            {
              PageInfo.map(info => (
                <li>
                  <NavLink key={`nav_${info.name}`}
                    to={`/${info.path}`}
                    className={({ isActive, isPending }) => {
                      // TODO: 
                      return isPending ? "bg-gray-900" : isActive ? "bg-red-200" : "bg-yellow-400"
                    }
                    }
                  >
                    {info.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}