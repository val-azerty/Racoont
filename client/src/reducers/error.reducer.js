import { GET_POST_ERRORS } from "../actions/post.actions";
import { GET_USER_ERRORS } from "../actions/user.actions";

const initialState = {userError: [], postErrors: []}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POST_ERRORS:
            return {
                postErrors: action.payload,
                userError: []
            }
        case GET_USER_ERRORS:
            return {
                userError: action.payload,
                postErrors: []
            }
    
        default:
            return state 
    }
}