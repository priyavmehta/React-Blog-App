import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email : "",
        password : "",
        name : '',
        username : ''
    }

    formValueChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form className = "jumbotron container" style = {{ marginTop : "20px"}} onSubmit = {this.submitForm}>
                <div style = {{ marginBottom : "30px" }}>
                    <h3><i>Login to BlogPace</i></h3>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="name" class="form-control" id="name" onChange = {this.formValueChange} value = {this.state.email}/>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="username" class="form-control" id="username" onChange = {this.formValueChange} value = {this.state.value}/>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" onChange = {this.formValueChange} value = {this.state.email}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" onChange = {this.formValueChange} value = {this.state.value}/>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        )
    }
}

export default SignUp
