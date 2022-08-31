import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogListCard from '../../components/BlogListCard'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Blog.css'
import { getPosts, reset } from '../../features/blog/blogSlice'
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";
function Blog({ create }) {
    const { lang } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()


    console.log(`lang is ${lang}`)

    const { blogs, isLoading, isError, isSuccess, message } = useSelector((state) => state.blogs)
    const { user } = useSelector((state) => state.auth)

    const [pageNum, setPageNum] = useState(0)
    let allPosts = []
    const [displayList, setDisplayList] = useState([])
    const [numTotalPages, setNumTotalPages] = useState(0);

    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        console.log(pageNum)
        console.log('in use effect')
        console.log('is loading ', isLoading)
        console.log('is success ', isSuccess)

        if (lang == null) {
            navigate('en')

        }

        if(!fetched){
            dispatch(getPosts())
        }

        if (isError) {
            console.log(message)
        }

        if(isLoading) {
            console.log('loading')    
        }

        if (!isLoading && isSuccess) {

            console.log("success")

            setDisplayList([])
            blogs.map((data) => {
             
                allPosts.push(JSON.parse(JSON.stringify(data)))
    
            })
            console.log(allPosts)
            setNumTotalPages(Math.ceil(allPosts.length / 3))

            let showFromIndex = pageNum * 3
            console.log(showFromIndex)
            let append = []

            console.log(allPosts)

            for (let i = showFromIndex; i < showFromIndex + 3 && i < allPosts.length; i++) {
                //console.log(`${i} is ${allPosts[i]}`)
                append.push(allPosts[i])
         
            }

            setDisplayList(append)
            setFetched(true)

            
        }

        else if(fetched){
           // console.log('before', allPosts)
            setDisplayList([])
            let showFromIndex = pageNum * 3
            console.log(showFromIndex)
            let append = []

            console.log(allPosts)

            for (let i = showFromIndex; i < showFromIndex + 3 && i < allPosts.length; i++) {
                //console.log(`${i} is ${allPosts[i]}`)
                append.push(allPosts[i])
         
            }
            console.log(append)
            setDisplayList(append)
            console.log(displayList)
        }



       /* return () => {
            console.log('returning')
            dispatch(reset())
        } */


    }, [pageNum, isLoading, isError, message, blogs, dispatch, fetched]);

    const goToFirstPage = () => {
        setPageNum(0)
    }

    const goToLastPage = () => {
        setPageNum(numTotalPages - 1)
    }

    const nextPage = () => {
        if (pageNum <= numTotalPages - 1) {
            setPageNum(pageNum + 1)
            console.log('set page')
        }
    }

    const prevPage = () => {
        if (pageNum > 0) {
            setPageNum(pageNum - 1)
        }
    }

    const navToCreatePost = () => {
        navigate('../me/blog-input/create', { replace: true })
    }

    const navToAdmin = () => {
        navigate('../me', {replace: true})
    }
    if(isLoading && !isSuccess){
        console.log(isSuccess)
        return (<Spinner/>)
    }

    else if (lang === 'zh') {
        return (
            <>
                <Header lang={'zh'} currPath={location.pathname} />
                <div className='blog-list-view'>
                <h1 style={{fontSize:'40px', color:'black'}}>Straight A Prep 博文</h1>
                    {
                        user ? 
                        <ul style={{display:'flex', flexDirection:'row', justifyContent:'left', width:'10%'}}>
                            <button className="create-post-btn" onClick={navToCreatePost}>Create</button> 
                            <button className="create-post-btn" onClick={navToAdmin}>Admin</button>
                        </ul>
                        : null
                    }
                    
                    <ul className="blog-list-show">
            
                            
               
                        {
                            displayList.map((item) => (
                                <li>

                                    <BlogListCard key={item._id} img={item.imageUrls} title={item.chineseTitle} content={item.chineseContent} id={item._id} lang={'zh'}/>

                                </li>
                            ))
                            
                        }
                        
                    </ul>
                    <p><br/></p>
                    <p><br/></p>
                    <ul className="navigate-horizontal">
                        <li className="navigate-item-arrow">
                            <div className="arrow" onClick={goToFirstPage}>{'<<'}</div>
                        </li>
                        <li className="navigate-item-arrow">
                            <div className="arrow" onClick={prevPage}>{'<'}</div>
                        </li>
                        <li className="navigate-item">
                            <div className="arrow">{`Page ${pageNum + 1} of ${numTotalPages}`}</div>
                        </li>
                        <li className="navigate-item-arrow">
                            <div className="arrow" onClick={nextPage}>{'>'}</div>
                        </li>
                        <li className="navigate-item-arrow">
                            <div className="arrow" onClick={goToLastPage}>{'>>'}</div>
                        </li>
                    </ul>

                </div>
                <Footer lang={'zh'}/>
            </>
        )
    }
    return (<>
        <Header lang={'en'} currPath={location.pathname} />
        
        <div className='blog-list-view'>
        <h1 style={{fontSize:'45px', color:'black'}}>Straight A Prep Blog</h1>
            {
                user ? 
                <ul style={{display:'flex', flexDirection:'row', justifyContent:'left', width:'10%'}}>
                    <button className="create-post-btn" onClick={navToCreatePost}>Create</button> 
                    <button className="create-post-btn" onClick={navToAdmin}>Admin</button>
                </ul>
                : null
            }
            
            <ul className="blog-list-show">
                {
                    displayList.map((item) => (
                        <li>

                            <BlogListCard key={item._id} img={item.imageUrls} title={item.title} content={item.content} id={item._id} lang={lang}/>

                        </li>
                    ))
                }
            </ul>
            <p><br/></p>
            <p><br/></p>
            <ul className="navigate-horizontal">
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={goToFirstPage}>{'<<'}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={prevPage}>{'<'}</div>
                </li>
                <li className="navigate-item">
                    <div className="arrow">{`Page ${pageNum + 1} of ${numTotalPages}`}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={nextPage}>{'>'}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={goToLastPage}>{'>>'}</div>
                </li>
            </ul>

        </div>
        <Footer />
    </> )
}

export default Blog