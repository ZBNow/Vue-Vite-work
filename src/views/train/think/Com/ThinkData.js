import { shallowRef } from "vue"
import ComA from './ComA.vue'
import ComB from './ComB.vue'
import ComC from './ComC.vue'
import ThinkQuestion from "../ThinkQuestion.vue"
import ThinkJob from "../ThinkJob.vue"
export const current = shallowRef(ThinkQuestion)
var previous = [ThinkQuestion]
export const changeCurrent=(name)=>{
    previous.push(current.value)
    if(name == 'ThinkJob'){
        current.value = ThinkJob
    }
    if(name == 'ThinkQuestion'){
        current.value = ThinkQuestion
    }
    if(name == 'ComC'){
        current.value = ComC
    }
}
export const goBack=()=>{
    current.value = previous[previous.length-2]
}