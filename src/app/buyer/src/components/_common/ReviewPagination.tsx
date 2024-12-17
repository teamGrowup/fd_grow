'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react'

//          interface: 페이지네이션 컴포넌트 properties          //
interface Props{
    currentPage: number;
    currentSection: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setCurrentSection: Dispatch<SetStateAction<number>>;
    viewPageList: number[];
    totalSection: number;
}

//          component: 페이지네이션 컴포넌트          //
export default function ReviewPagination(props: Props) {

    //          state: Properties          //
    const { currentPage, currentSection, viewPageList, totalSection } = props;
    const { setCurrentPage, setCurrentSection } = props;

    //          event handler: 페이지 번호 클릭 이벤트 처리          //
    const onPageClickHandler = (page: number) => {
        setCurrentPage(page);
    }
    //          event handler: 이전 클릭 이벤트 처리          //
    const onPreviousClickHandler = () => {
        if(currentSection === 1) return;
        setCurrentPage((currentSection - 1) * 10);
        setCurrentSection(currentSection - 1);
    }
    //          event handler: 다음 클릭 이벤트 처리          //
    const onNextClickHandler = () => {
        if(currentSection === totalSection) return;
        setCurrentPage((currentSection * 10) + 1);
        setCurrentSection(currentSection + 1);
    }

    //          render: 페이지네이션 컴포넌트 렌더링          //
    return (
        <div className='flex gap-5'>
            <div className='flex items-center gap-1 cursor-pointer'>
                <ChevronLeft />
                <div className='text-gray-600 text-sm font-semibold' onClick={onPreviousClickHandler}>{'이전'}</div>
            </div>
            <div className='text-gray-400 cursor-default'>{'\|'}</div>

            {viewPageList.map(page => 
            page === currentPage ?
            <div key={page} className='pagination-text-active'>{page}</div> : 
            <div key={page} className='pagination-text' onClick={() => onPageClickHandler(page)}>{page}</div>
            )}

            <div className='text-gray-400 cursor-default'>{'\|'}</div>
            <div className='flex items-center gap-1 cursor-pointer'>
                <div className='text-gray-600 text-sm font-semibold' onClick={onNextClickHandler}>{'다음'}</div>
                <ChevronRight />
            </div>
        </div>
    )
}
