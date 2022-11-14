import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getMessages";
const hds = { "Content-Type": "application/json" };

const getMessages = async () => {
    const response = await axios.get(url);
    //console.log(response.data);
    return response.data;
};
export default getMessages;
