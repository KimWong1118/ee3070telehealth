import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getSuggestions";

const getSuggestions = async (usr) => {
    const response = await axios.get(url, { params: { receiver: usr } });
    return response.data;
};
export default getSuggestions;
