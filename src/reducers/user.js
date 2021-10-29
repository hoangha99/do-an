import * as type from './../constants/actionType'

const InitialState = {
    token: "",
}
const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case type.SET_TOKEN:
            return { ...state, token: action.payload }
            
        default:
            return state;
    }
}

export default reducer;