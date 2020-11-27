const initState = {
    blogs : [
        {id : '1', title : 'Hello', content : 'How are you ?'},
        {id : '2', title : 'World', content : 'I am fine'},
        {id : '3', title : 'How', content : 'What about you ?'},
        {id : '4', title : 'Are', content : 'I am fine too'}
    ]
}

const blogReducer = (state = initState, action) => {
    return state
}

export default blogReducer