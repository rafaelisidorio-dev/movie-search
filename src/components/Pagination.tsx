interface PaginationProps {
  nextPage: (pageNumber: number) => void;
  pages: number;
  currentPage: number;
}

export function Pagination({ pages, nextPage, currentPage }: PaginationProps) {
  const pageLinks: JSX.Element[] = [];

  for (let i = 1; i <= pages + 1; i++) {
    pageLinks.push(
      <li
        key={i}
        onClick={() => nextPage(i)}
        className="border border-black p-2 rounded-md"
      >
        <a href="#">{i}</a>
      </li>
    );
  }

  return (
    <nav>
      <ul className="flex justify-center gap-2">
        {/* {pageLinks.map((number) => (
          <li key={number} className="border border-black p-2 rounded-md">
            <a onClick={() => nextPage(number)} href="!#">
              {number}
            </a>
          </li>
        ))} */}

        {pageLinks}
      </ul>
    </nav>
  );
}
