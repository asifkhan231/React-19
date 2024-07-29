import React, { useEffect, useState } from 'react'

export default function RegularApiHandle() {
    const [posts, setPosts] = useState([])
    const [pending, setPending] = useState(true)

    const fetchApi = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();
        setPosts(data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchApi(),
                setPending(false)
        }, 2000)
    }, [])

    return (
        <div>
            {!pending ? posts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )) :
                <p>Loading....</p>}
        </div>
    )
}
