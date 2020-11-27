import React from 'react'

const BlogList = () => {
    const url = "https://firebasestorage.googleapis.com/v0/b/react-gallery-app-5ce9c.appspot.com/o/Image%2084.png?alt=media&token=1fad33a1-4e1a-41b3-a838-73f30a48eb69";
    return (
        <div>
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="card">
                        <img src={require('./technology.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="card">
                        <img src={url} class="card-img-top" alt="..." />
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
