import React, { Component } from 'react'

class SignIn extends Component {

    state = {
        email : "",
        password : ""
    }

    render() {
        return (
            <form className = "jumbotron container" style = {{ marginTop : "20px"}}>
                <div style = {{ marginBottom : "30px" }}>
                    <h3><i>Login to BlogPace</i></h3>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" onChange = {} value = {this.state.email}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" onChange = {} value = {this.state.value/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default SignIn
