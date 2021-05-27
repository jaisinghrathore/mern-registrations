import {SET_TOGGLE} from "./toggleType";

const initialState={
    getToggle:false
}


const toggleReducers = (state=initialState,action) =>{
    switch(action.type){
        case SET_TOGGLE:return{
            ...state,
            getToggle:action.payload
        }
        default : return state;
    }
}

export default toggleReducers ;