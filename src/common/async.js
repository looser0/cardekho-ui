import axios from "axios";

const getRequest = (baseURL)=>{
    axios.get(baseURL).then((response) => {
        setPost(response.data);
    });
}
export default async;