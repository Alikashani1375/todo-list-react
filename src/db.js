import axios from "axios";
export default axios.create({
    baseURL: "https://todo-reactapp-6d26d-default-rtdb.firebaseio.com/"
})