import { ACTCL, ACTC , CL} from "./actType"
export const a=(payload)=>{
    return{
        type:ACTCL,
        payload
    }
}
export const b=(payload)=>{
    return{
        type:ACTC,
        payload
    }
}

export const c=(payload)=>{
    return{
        type:CL,
        payload
    }
}