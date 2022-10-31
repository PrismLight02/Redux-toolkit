import { useDispatch, useSelector } from "react-redux"
import { updateCounter } from "../store/user/userCounterSlice"

export default function Counter(){
    const dispatch = useDispatch()
    const counter = useSelector(state=>state.counter)
    return(
        <div>
            <button onClick={()=>{dispatch(updateCounter())}}>Increase count</button>
            <span>{counter.counter}</span>
        </div>
    )
}