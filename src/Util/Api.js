import axios from "axios"

export function axiosGetPost (){
   return axios.get("https://jsonplaceholder.typicode.com/posts")
}