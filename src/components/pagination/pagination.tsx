import React, { useEffect, useState } from "react";
import cx from 'classnames';
import "./pagination.css";

type PaginationProps = {
  listSize: number;
  pageSize: number;
  onChangeHandler: (currentPage: number) => void;
};

const SitePagination = (props: PaginationProps) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page_count =
      props.listSize <= props.pageSize
        ? 1
        : Math.floor(props.listSize / props.pageSize) + 1;
    setTotalPages(page_count);
  }, [props]);

  const previousEvent = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };
  const nextEvent = () => {
    if (currentPage < props.listSize) {
      changePage(currentPage + 1);
    }
  };
  const changePage = (pageNo: number) => {
    setCurrentPage(pageNo);
    props.onChangeHandler(pageNo);
  };

  return (
    
    <nav className="pagination">
      <ul>
        <li className={cx(currentPage === 1 && 'disabled')} onClick={previousEvent}>
          <span>&lt;</span>
        </li>
        {[...Array(totalPages)].map((data: any, index: number) => {
          return (
            <li key={index} className={cx(currentPage === (index+1) && 'active')} onClick={() => changePage(index+1)} >
              <span>{index + 1}</span>
            </li>
          );
        })}
        <li className={cx(currentPage === totalPages && 'disabled')} onClick={nextEvent}>
          <span>&gt;</span>
        </li>
      </ul>
    </nav>
  );
};

export default SitePagination;
