import React, {useEffect, useState} from "react";
import style from './Paginator.module.css'

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, onPageSizeChanged,portionSize}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    //кол-во кнопок в порции portionSize
    //кол-во порций
   const porsionCount=Math.ceil(pagesCount/portionSize);

    let [numberPortion, setNumberPortion]=useState(1)

    let leftBorder=(numberPortion-1)*portionSize +1
    let rightBorder=numberPortion*portionSize
    useEffect(()=>{
        if(numberPortion!==1)setNumberPortion(porsionCount)
        console.log('leftBorder'+leftBorder)
        console.log('rightBorder'+rightBorder)
        console.log('currentPage'+currentPage)
        console.log('porsionCount'+porsionCount)
        if(currentPage>pagesCount&&pagesCount!==0){
            onPageChanged(pagesCount)
        }

    },[pageSize])

    return (
        <div>
            <div>
                <button disabled={numberPortion===1}
                        onClick={()=>setNumberPortion(numberPortion-1)}>{'<---'}</button>
                {pages
                    .slice(leftBorder-1, rightBorder)
                    .map(el => {
                    return <span onClick={() => onPageChanged(el)}
                                 className={currentPage === el && style.selectedPage}>{el}</span>
                })}
                <button disabled={numberPortion===porsionCount}
                        onClick={()=>setNumberPortion(numberPortion+1)}>{'...>'}</button>
            </div>

            <select autoFocus={true}
                    value={pageSize}
                    size={1}
                    onChange={(e) => onPageSizeChanged(e.currentTarget.value)}>
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
            </select>
        </div>
    )
}