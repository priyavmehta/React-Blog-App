import React, { Component } from 'react'

class AddBlog extends Component {

    state = {
        title : '',
        content : '',
        image : ''
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
            <form className = "container" style = {{ marginTop : "20px"}} onSubmit = {this.submitForm}>
                <div style = {{ marginBottom : "30px" }}>
                    <h2><i>Welcome to BlogPace</i></h2>
                    <h5>Enter your details so that we can know more about you</h5>
                </div>
                <div class="form-group">
                    <label for="title">Name</label>
                    <input type="text" class="form-control" id="title" onChange = {this.formValueChange} value = {this.state.title}/>
                </div>
                <div class="form-group">
                    <label for="content">Username</label>
                    <input type="text" class="form-control" id="content" onChange = {this.formValueChange} value = {this.state.content}/>
                </div>
                <div class="form-group">
                    <label for="image">Blog Image</label>
                    <input type="file" class="form-control-file" id="image" />
                </div>
                <button type="submit" class="btn btn-primary">Add Blog</button>
            </form>
        )
    }
}

export default AddBlog
