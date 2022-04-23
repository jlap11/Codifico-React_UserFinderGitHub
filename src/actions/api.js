import  axios  from "axios";

const baseURL= "https://api.github.com/users/"

export default{
    user(url = baseURL + ''){
        return {
            consultar: userName => axios.get(url + userName)          
        }
    }
}