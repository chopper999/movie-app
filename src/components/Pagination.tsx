import { Icon } from "@iconify/react";
import "../scss/pagination.scss";

export default function Pagination({
  totalPage,
  page,
  onPageChange,
}: {
  totalPage: number;
  page: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="pagination">
      <Icon
        className={"icon-pagination " + (page === 1 ? "disable" : "")}
        onClick={() => {
          if (page > 1) {
            onPageChange(page - 1);
          }
        }}
        icon="iconamoon:arrow-left-2-light"
        height={30}
        width={30}
      />
      <div
        className={"page " + (page === 1 ? "active" : "")}
        onClick={() => onPageChange(1)}
      >
        1
      </div>
      {page > 3 && <div>...</div>}
      {page > 2 && (
        <div className="page" onClick={() => onPageChange(page - 1)}>
          {page - 1}
        </div>
      )}
      {page > 1 && page < totalPage && (
        <div className="page active">{page}</div>
      )}
      {page < totalPage - 1 && (
        <div className="page" onClick={() => onPageChange(page + 1)}>
          {page + 1}
        </div>
      )}
      {page < totalPage - 2 && <div>...</div>}
      <div
        className={"page " + (page === totalPage ? "active" : "")}
        onClick={() => onPageChange(totalPage)}
      >
        {totalPage}
      </div>
      <Icon
        className={"icon-pagination " + (page === totalPage ? "disable" : "")}
        onClick={() => {
          if (page < totalPage) {
            onPageChange(page + 1);
          }
        }}
        icon="iconamoon:arrow-right-2-light"
        height={30}
        width={30}
      />
    </div>
  );
}
