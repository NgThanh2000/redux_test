import React from "react";
import { batch, connect } from "react-redux";
import {useState} from 'react';
import {useSelector,useDispatch}  from 'react-redux'
import {a,b,c} from './action/actCl'
// import store from "./store";

function Component(props){
    // const [state,setState] = useState('');
    // const hand = () =>{
    //     setState(state + 0)
    //     props.cl(1)
    // }

    //dùng hook
    const dispatch = useDispatch();
    const v = useSelector(state => state.setColor_redux);

    const array = [
        'dsd-',
        'fdf-',
        'dfdj-'
    ]
    const handleOnClick = () =>{
        props.onTodoClick(array)
    }

    return(
        <div>
            <h2>{v === Array ? "ob" : "Array"}</h2>
            <button onClick={()=> dispatch(a(20))}>Click</button>
            <button onClick={()=> dispatch(b(200))}>Click</button>
            <button onClick={handleOnClick}>click</button>
            <ul>

            </ul>
        </div>
    )
}

// dùng HOC connect
const mapDispatchToProps = (dispatch) => {
    return{
        onTodoClick:(payload) => {
            dispatch(c(payload))
        }
    }
}
const mapStateToProps = (state) =>{
    return{
        setColor: state.setColor_redux
    }
}
export default connect(mapStateToProps,)(Component);