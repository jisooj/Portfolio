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
    <nav className="lg:float-left lg:fixed z-100 mb-20">
      <div className="lg:block flex items-center justify-between flex-wrap">
        <a href="/" className="block">
          <span className="text-2xl font-semibold">Logo</span>
        </a>

        <div className="lg:mt-60">
          {/* <ul className="font-medium lg:flex lg:flex-col lg:gap-16 flex flex-col"> */}
            <ul className="flex lg:flex-col lg:gap-8 flex-row p-4 lg:p-0 mt-4 lg:space-x-8">
            {
              PageInfo.map(info => (
                <li key={`nav_${info.name}`} className="mr-6">
                  <NavLink
                    to={`/${info.path}`}
                    className={({ isActive, isPending }) => {
                      // TODO: 
                      // return isPending ? "bg-gray-900" : isActive ? "bg-red-200" : "bg-yellow-400";
                      return isActive ? "bg-red-100" : "text-gray-700";
                    }}
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