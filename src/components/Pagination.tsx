import { SetURLSearchParams } from "react-router-dom";

interface PaginationProps {
  pages: number;
  page: number;
  setSearchParams: SetURLSearchParams;
}

export function Pagination({ pages, page, setSearchParams }: PaginationProps) {
  //const [, setSearchParams] = useSearchParams();

  function firstPage() {
    setSearchParams((params) => {
      params.set("page", String((page = 1)));

      return params;
    });
  }

  function previousPage() {
    if (page - 1 <= 0) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page - 1));

      return params;
    });
  }

  function nextPage() {
    if (page + 1 > pages) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page + 1));

      return params;
    });
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set("page", String(pages));

      return params;
    });
  }

  if (pages > 500) {
    pages = 500;
  }

  return (
    <div className="flex justify-center items-center gap-8">
      <button onClick={firstPage}>1</button>
      <button onClick={previousPage}>{"<"}</button>
      <span>
        {page} of {pages}
      </span>
      <button onClick={nextPage}>{">"}</button>
      <button onClick={lastPage}>{pages}</button>
    </div>
  );
}
