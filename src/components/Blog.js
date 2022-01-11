import { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [pageNo, setPageNo] = useState([1])
    const api = process.env.REACT_APP_POSTS_API_URL

    const fetchPosts = () => {
        axios.get(api + pageNo)
            .then(response => {
                setPosts(response.data.posts)
            })
            .catch(err => console.error(err))
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
        <div id='blogs-page'>
            <h1>coming soon..</h1>
            {/* <div>
                {posts.map(post => {
                    return <p key={post.title}>{post.title}</p>
                })}
            </div>
            <div className='paginator'>
                <button onClick={handlePrevClick}>prev</button>
                <button onClick={handleNextClick}>next</button>
            </div> */}
        </div>
    )
}

export default Blog