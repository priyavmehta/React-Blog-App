import React, { Component } from 'react'

class SignIn extends Component {

    state = {
        email : "",
        password : ""
    }

    formValueChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    submitForm = (e) => {
        console.log(e)
    }

    render() {
        return (
            <form className = "jumbotron container" style = {{ marginTop : "20px"}} onSubmit = {this.submitForm}>
                <div style = {{ marginBottom : "30px" }}>
                    <h3><i>Login to BlogPace</i></h3>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" onChange = {this.formValueChange} value = {this.state.email}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" onChange = {this.formValueChange} value = {this.state.value}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default SignIn
