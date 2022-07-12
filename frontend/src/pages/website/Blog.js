import React, { useEffect, useState } from "react";
import BlogListCard from '../../components/BlogListCard'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Blog.css'



function Blog() {

    const blogList = [
        {img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        title: 'This is Article 1', content: "hdueoxwbhuioe xureioq ueio;q urio;qw uiroe wqu8cr04[3 uc8i rueiwo; jurieow;    ur80423[p1 uiroe;w uior;e wuiqor uieow;q curio;w quirodueio;qw uioe;wquio;durie  rfioewp 'urieowq; ruis jfkdra; frikea;"},
        {img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', title: 'This is Article 2',
        content: 'ydueil hfura ufi hfuidl ayhuiflduysia jfido jrio;a ufio jgkf; dauio fikd; ufioe;w jklgrjfdiko; jgiorf; jklv;f djuiogrjfkied; jkvlf djklf;j kglf;dj siko;jiorf; jklv jko;aeopjfido jfieo; jfieo;w ajifoeraj ifo;ejwia; jfioe; jiofji;'},
        {img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', title: 'This is Article 3',
        content: 'hfdju lhfuierl uio uijnvkfl8dof jke jikles jkao; uio;k hfjdrkw  jkfl jh jilo ejuiwo; i heuwl hfujiel yhuw; jeik ;ujfieow; urio;wiuoe;ndieo;w jioe;w uiqo; uio; uioe;w uio;e uwio;q uiof;e uwio ;ufieo;wq uioq; uqio; uifoe;w uiof;eio;'},
        {img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', title: 'This is Article 4',
        content: 'yuiewl yhui hyuilwyquil uio; uio;uioq; yeu jiwoq;uio; jioe; uiro;ewiqu uideo; wuifo;jerkljfklds/ jieow jkld; aueiw;l hufeil whgiure; ioe; uifo;j klds jifoe; wquifoe;w uifo;e jklsajfkl gjikro;e sjgklr jkrl;e wugiro kvfld jskflg;jeri ;j'},
    ]

    const [pageNum, setPageNum] = useState(0)
    const [displayList, setDisplayList] = useState([blogList[0], blogList[1], blogList[2]])
    const numTotalPages = Math.ceil(blogList.length/3)

    useEffect(
        () => {
            
            setDisplayList([])
            let showFromIndex = pageNum*3
            console.log(`show from ${showFromIndex}`)
            let append = []
            for(let i = showFromIndex; i < showFromIndex+3 && i < blogList.length; i++){
                append.push(blogList[i])
            }
            setDisplayList(append)
            console.log(displayList.length)
        },
        [pageNum]
    )

    const goToFirstPage = () => {
        setPageNum(0)
    }

    const goToLastPage = () => {
        setPageNum(numTotalPages-1)
    }

    const nextPage = () => {
        if(pageNum < numTotalPages-1){
            setPageNum(pageNum+1)
        }
    }

    const prevPage = () => {
        if(pageNum > 0){
            setPageNum(pageNum-1)
        }
    }
    return <>
     <Header/>
        <div className='blog-list-view'>
            <ul className="blog-list-show">
                {
                    displayList.map((item) => (
                        <li>
                            <BlogListCard img={item.img} title={item.title} content={item.content}/>
                        </li>
                    ))
                }
            </ul>
            <ul className="navigate-horizontal">
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={goToFirstPage}>{'<<'}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={prevPage}>{'<'}</div>
                </li>
                <li className="navigate-item">
                    <div className="arrow">{`Page ${pageNum+1} of ${numTotalPages}`}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={nextPage}>{'>'}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={goToLastPage}>{'>>'}</div>
                </li>
            </ul>
            
        </div>
        <Footer/>
    </>
}

export default Blog