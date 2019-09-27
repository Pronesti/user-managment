import moment from "moment"

const userReducer = (state={uuid: 0, name:'Newbie', email:'email@email.com', level: 2, experience: 123, color: 'red', phone: '+5491145215965', age: Date.now()}, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                uuid: action.payload
            }
        default:
            return state
    }
}

export default userReducer;