import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getUserInfo";

const getUserInfo = async (usr) => {
    //console.log(usr);
    const response = await axios.get(url, { params: { username: usr } });
    //console.log(response.data);
    return response.data;
};
export default getUserInfo;
