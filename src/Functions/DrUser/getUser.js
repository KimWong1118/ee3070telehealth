import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getUsers";

const getUsers = async () => {
    const response = await axios.get(url);
    return response.data;
};
export default getUsers;
