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
        <div className="flex items-center justify-between gap-2 sm:gap-0 mx-8 md:mx-6">
          <img className="w-[154px] h-[20px]" src={logo} />

          <div className="hidden md:flex md:items-center md:gap-8 ">
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
            className="w-2/4 sm:w-fit text-primary-white pl-1 rounded bg-transparent border border-primary-white"
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
