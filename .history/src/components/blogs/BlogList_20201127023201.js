import React from 'react'
import Blog from './Blog'

const BlogList = () => {
    
    
    return (
        <div>
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <Blog/>
                </div>
                <div class="col-sm-6 col-md-6">
                    <Blog/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <Blog/>
                </div>
                <div class="col-sm-6 col-md-6">
                    <Blog/>
                </div>
            </div>
        </div>
    )
}

export default BlogList
