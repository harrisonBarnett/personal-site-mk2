import { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [pageNo, setPageNo] = useState([1])
    const api = process.env.REACT_APP_POSTS_API_URL

    const fetchPosts = () => {
        axios.get((api + pageNo), {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_BLOG_API_TOKEN}`
            }
        })
        .then(response => {
            console.log(api + pageNo)
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
            setPageNo(parseInt(pageNo) - 1)
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
            <h1>coming soon..</h1>
            {/* <div className='blog-post-container'>
                {posts.map(post => {
                    return <div className='blog-post' key={post.title}>
                            <p className='blog-post-title'>{post.title}</p>
                            {<div 
                                className='blog-post-content' 
                                dangerouslySetInnerHTML={{ __html: post.content }}>
                            </div>}
                        </div>
                })}
            </div>
            <div className='paginator'>
                <button onClick={handlePrevClick}>prev</button>
                <button onClick={handleNextClick}>next</button>
            </div>  */}
        </div>
    )
}

export default Blog