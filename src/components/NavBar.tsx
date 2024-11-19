import Logo from "/logo.svg";

export function NavBar() {
  return (
    <header>
      <nav className="bg-sky-950 py-5">
        <div className="max-w-7xl flex items-center justify-between my-0 mx-auto">
          <img src={Logo} className="w-37 h-5" />

          <div>
            <input
              className="mr-2 text-black rounded-md outline-none"
              type="text"
              placeholder="Search Movie"
            />
            <button className="text-white border rounded-md" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
