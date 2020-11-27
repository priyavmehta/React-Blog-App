import React from 'react'
import Blog from './Blog'

const BlogList = ({blogs}) => {
    

    return (
        <div>
            {
                blogs && blogs.map(blog => {
                    return (
                        <div class="row">
                            <div class="col-sm-6 col-md-6">
                                <Blog blog = {blog} key = {blog.id}/>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default BlogList
