import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {

    const url1 = "https://firebasestorage.googleapis.com/v0/b/react-gallery-app-5ce9c.appspot.com/o/Image%2047.png?alt=media&token=5fd60b02-f7d3-4716-906e-6ada037ba130";
    console.log(blog.title)
    return (
        <div class="card">
            <img src={url1} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{blog.title}</h5>
                <p class="card-text">{blog.content}.</p>
                <Link to={"/projectdetails/" + blog.id} class="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )
}

export default Blog
