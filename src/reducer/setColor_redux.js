import { ACTCL,ACTC,CL } from "../action/actType";

const intial = []
const setColor_redux = (state = intial ,action ) =>{
    switch(action.type){
        case ACTCL: 
            state = action.payload    
            return state;
        case ACTC:   
            state = action.payload                 
            return state;
        case CL:   
            state = action.payload                 
            return state;
        default:
            return state;
    }
}
export default setColor_redux;