import React from 'react';
import './App.css';
import ProfileCard from "./component/ProfileCard"
import UserForm from "./component/UserForm"
import Counter from "./component/Counter"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from './store/fetch/getPosts';
import {setLoading} from "./store/fetch/getPosts"
function App() {

  const dispatch =useDispatch()
  const post = useSelector(state=>state.post)
  return (
    <div className="App">
      <ProfileCard/>
      <UserForm/>
      <Counter/>
      <div>
      <h1>Fetching data using AsyncThunk !</h1>
      <button onClick={()=>{
        dispatch(setLoading(true))
        dispatch(fetchAllPosts())}}
        >
          Click me to fetch!</button>
      {post.loading &&(<p>Loading posts....</p>)}
      <div>
      {post.posts.map((p)=>(<div key={p.id}>
        <p>{p.title}</p>
        <p>{p.id}</p>
        </div>
      ))}
      </div>
      </div>  
    </div>
  );
}

export default App;
