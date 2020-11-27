import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div class="container" style = {{ marginTop : "30px"}}>
                {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
                <div class="row">
                    <div class="col-md-7.5" style={{ background : "red", margin : "10px"}}>.col-md-8</div>
                    <div class="col-6 col-md-3.5" style = {{ background : "yellow", margin : "10px"}}>.col-6 .col-md-4</div>
                </div>

                {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
                {/* <div class="row">
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                </div> */}

                {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
                {/* <div class="row">
                    <div class="col-6">.col-6</div>
                    <div class="col-6">.col-6</div>
                </div> */}
            </div>
        )
    }
}

export default Dashboard