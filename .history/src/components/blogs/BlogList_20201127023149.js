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
                    <div class="card">
                        <img src={url2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="card">
                        <img src={url1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogList
