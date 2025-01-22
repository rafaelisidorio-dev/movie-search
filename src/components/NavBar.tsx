import { ChangeEvent } from "react";
import Logo from "/logo.svg";

interface NavBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function NavBar({ searchTerm, setSearchTerm }: NavBarProps) {
  return (
    <header>
      <nav className="bg-sky-950 py-5">
        <div className="max-w-7xl flex items-center justify-between my-0 mx-auto">
          <img src={Logo} className="w-37 h-5" />

          <form>
            <input
              className="mr-2 text-black rounded-md outline-none"
              type="text"
              placeholder="Search Movie"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(event.target.value)
              }
              value={searchTerm}
            />
            <button className="text-white border rounded-md" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
