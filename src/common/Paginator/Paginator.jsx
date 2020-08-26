import React from "react";
import style from './Paginator.module.css'

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(el => {
                return <span onClick={() => onPageChanged(el)}
                             className={currentPage === el && style.selectedPage}>{el}</span>
            })}
        </div>
    )
}