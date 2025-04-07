import { ChangeEvent } from "react";
import logo from "/logo.svg";

interface NavBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function NavBar({ searchTerm, setSearchTerm }: NavBarProps) {
  return (
    <header>
      <nav className="bg-[rgba(3,37,65,1)] py-5">
        <div className="max-w-6xl flex items-center justify-between mx-auto">
          <img className="w-[154px] h-[20px]" src={logo} />

          <div className="flex items-center gap-8">
            <a href="#" className="text-base text-primary-white font-semibold">
              Filmes
            </a>
            <a href="#" className="text-base text-primary-white font-semibold">
              Séries
            </a>
            <a href="#" className="text-base text-primary-white font-semibold">
              Pessoas
            </a>
            <a href="#" className="text-base text-primary-white font-semibold">
              Mais
            </a>
          </div>

          <input
            className="text-primary-white pl-1 rounded bg-transparent border border-primary-white"
            type="text"
            placeholder="Digite algo..."
            value={searchTerm}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
      </nav>
    </header>
  );
}
