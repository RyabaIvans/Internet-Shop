import React from 'react';
import ReactPaginate from "react-paginate";
import s from './pagination.module.scss'


type PropsType = {
    onChangePage(n: number): void
}
const Pagination = (props: PropsType) => {
    return (
        <ReactPaginate
            className={s.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => props.onChangePage(event.selected)}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;