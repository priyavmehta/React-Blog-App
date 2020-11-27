import React, { Component } from 'react'
import BlogList from '../blogs/BlogList'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        return (
            <div class="container" style = {{ marginTop : "30px"}}>
                {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
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

export default Dashboard
