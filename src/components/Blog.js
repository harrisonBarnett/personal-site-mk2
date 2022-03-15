import { useState, useEffect } from 'react'
import axios from 'axios'

import Loading from '../static/images/Circles-menu-3.gif'
import PrevBtn from '../static/images/nav/prev-btn.svg'
import NextBtn from '../static/images/nav/next-btn.svg'

const Blog = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [pageNo, setPageNo] = useState([1])
    const api = process.env.REACT_APP_POSTS_API_URL

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get((api + pageNo), {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_BLOG_API_TOKEN}`
            }
        })
        .then(response => {
            setIsLoading(false)
            setPosts(response.data.posts)
        })
        .catch(err => console.error)
    }
    useEffect(() => {
        fetchPosts()
    }, [pageNo])
    const handlePrevClick = () => {
        if(pageNo === 1) {
            setPageNo(1)
        } else {
            setPageNo(parseInt(pageNo) - 1)``
        }
    }
    const handleNextClick = () => {
        if(posts.length < 5) {
            return
        } else {
            setPageNo(parseInt(pageNo) + 1)
        }
    }
    return (
        <div id='blog-page'>
            
            <div className='blog-post-container'>
                <img className='loading-prompt'
                src={Loading}
                style={{
                    display: isLoading ? 'block' : 'none'
                }}/>
                {posts.map(post => {
                    return <div className='blog-post' key={post.title}>
                            <div className='blog-post-header'>
                                <p className='blog-post-title'>{post.title}</p>
                                <p className='blog-post-date'>{new Date(post.date_added).toDateString()}</p>
                            </div>
                            
                            {<div 
                                className='blog-post-content' 
                                dangerouslySetInnerHTML={{ __html: post.content }}>
                            </div>}
                        </div>
                })}
            </div>
            <div className='paginator'>
                <button onClick={handlePrevClick}><img src={PrevBtn} alt='previous button'/></button>
                <button onClick={handleNextClick}><img src={NextBtn} alt='next button'/></button>
            </div> 
        </div>
    )
}

export default Blog