const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:px-10">
      <div className="navbar-start w-full flex justify-between lg:justify-normal">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <a>Home</a>
          </li>
          <li>
            <a>Materi</a>
          </li>
          <li>
            <a>Help</a>
          </li>
          <li>
            <a>Kelompok</a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Universitas Siliwangi</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Menghitung</a>
          </li>
          <li>
            <a>Help</a>
          </li>
          <li>
            <a>Kelompok</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
