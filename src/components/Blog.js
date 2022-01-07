import { useState, useEffect } from 'react'

const Blog = () => {
    // fetch api/:pageNo
    const [api, setApi] = useState(['api/'])
    const [posts, setPosts] = useState([])

    useEffect(
        setPosts(api)
    , [api])
    return (
        <>
        {/* for each post in posts render post */}

        {/* prev-btn | next-btn */}
        {/* setApi endpoint on click */}
        </>
    )
}

export default Blog