import Logo from "/logo.svg";
import { SearchMenu } from "./SearchMenu";

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
          <SearchMenu searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </nav>
    </header>
  );
}
