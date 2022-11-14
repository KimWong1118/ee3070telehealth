import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getCode";

const getCode = async (usr) => {
    const response = await axios.get(url, { params: { username: usr } });
    return response.data[0];
};
export default getCode;
