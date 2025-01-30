import { ChangeEvent } from "react";

interface SearchMenuProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchMenu({ searchTerm, setSearchTerm }: SearchMenuProps) {
  return (
    <form>
      <input
        className="mr-2 text-black rounded-md outline-none"
        type="text"
        placeholder="Search Movie"
        value={searchTerm}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(event.target.value)
        }
      />
      <button className="text-white border rounded-md" type="submit">
        Search
      </button>
    </form>
  );
}
