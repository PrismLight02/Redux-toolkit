import { useSelector } from "react-redux"


export default function UserComponent(){
    const userSlice = useSelector((state)=>state.user)
    return (<div>
    <p>{userSlice.id}</p>
    <p>{userSlice.userName}</p>
    <p>{userSlice.email}</p>
    </div>)
}