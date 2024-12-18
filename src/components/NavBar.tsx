import { FormEvent } from "react";
import Logo from "/logo.svg";

interface NavBarProps {
  inputRef: React.RefObject<HTMLInputElement>
  handleSubmit: (event: FormEvent<Element>) => void
}

export function NavBar({ handleSubmit, inputRef }: NavBarProps) {
  return (
    <header>
      <nav className="bg-sky-950 py-5">
        <div className="max-w-7xl flex items-center justify-between my-0 mx-auto">
          <img src={Logo} className="w-37 h-5" />

          <form onSubmit={handleSubmit}>
            <input
              className="mr-2 text-black rounded-md outline-none"
              type="text"
              placeholder="Search Movie"
              ref={inputRef}
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
