const userReducer = (state={user:{uuid: 0, name:'Newbie', email:'email@email.com', level: 0, experience: 0, color: 'red'}}, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default userReducer;