import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/sendMessage";

const sendMessage = async (usr, topic, content) => {
    const response = await axios.post(url, { username: usr, topic: topic, content: content });
    console.log(response.data);
    if (response.data.success) {
        return true;
    }
};
export default sendMessage;
