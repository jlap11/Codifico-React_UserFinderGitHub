import { ACTION_TYPES } from "../actions/userFinder";
const initialState ={
    list: []
}

export const user = (state = initialState, action) => {    
            return {
                ...state
                //,list: [...action.payload]
            }
}