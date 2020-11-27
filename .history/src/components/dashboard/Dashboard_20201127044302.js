import React, { Component } from 'react'
import BlogList from '../blogs/BlogList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div class="container" style = {{ marginTop : "30px"}}>
                <div class="row">
                    <div class="col-md-8" style={{ margin : "0px"}}>
                        <BlogList/>
                    </div>
                    <div class="col-6 col-md-3" style = {{ background : "yellow", margin : "0px"}}>
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        blogs : state.blog.blogs
    }
}

export default connect()(Dashboard)
