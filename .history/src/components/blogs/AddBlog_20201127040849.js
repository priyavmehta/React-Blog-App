import React, { Component } from 'react'

class AddBlog extends Component {

    state = {
        title : '',
        content : '',
        image : null,
        author : "Priyav Mehta"
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

    imageHandler = (e) => {
        let selected = e.target.files[0];
        const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];
        
        if (selected && validTypes.includes(selected.type)){
            this.setState({
                image : selected
            })
        }
    };

    render() {
        return (
            <form className = "container" style = {{ marginTop : "20px"}} onSubmit = {this.submitForm}>
                <div style = {{ marginBottom : "30px" }}>
                    <h2><i>Add a blog to BlogPace</i></h2>
                </div>
                <div class="form-group">
                    <label for="title">Blog Title</label>
                    <input type="text" class="form-control" id="title" onChange = {this.formValueChange} value = {this.state.title}/>
                </div>
                <div class="form-group">
                    <label for="content">Blog Content</label>
                    <textarea class="form-control" id="content" onChange = {this.formValueChange} value = {this.state.content}/>
                </div>
                <div class="form-group">
                    <label for="image">Blog Image</label>
                    <input type="file" class="form-control-file" id="image" onChange = {this.imageHandler}/>
                </div>
                <button type="submit" class="btn btn-primary">Add Blog</button>
            </form>
        )
    }
}

export default AddBlog
