import {SET_TOGGLE} from "./toggleType";

export default function toggleAction(val){
    return{
        type:SET_TOGGLE,
        payload:val
    }
}