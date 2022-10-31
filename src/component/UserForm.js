import { useDispatch } from "react-redux"
import { updateEmail, updateUserName } from "../store/user/userSlice";

export default function UserForm() {

    const dispatch = useDispatch();

    return (
        <form>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e)=>{dispatch(updateUserName(e.target.value))}}></input>
        </div>
            
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={(e)=>{dispatch(updateEmail(e.target.value))}}></input>
        </div>
            

            <button>Save</button>
        </form>
    )
}