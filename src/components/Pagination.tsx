interface PaginationProps {
  moviesPerPage: number;
  totalMovies: number;
  paginate: (number: number) => void;
}

export function Pagination({
  moviesPerPage,
  totalMovies,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center gap-2">
        {pageNumbers.map((number) => (
          <li key={number} className="border border-black p-2 rounded-md">
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
