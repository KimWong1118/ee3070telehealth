import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/sendSuggestion";

const sendSuggestion = async (usr, docid, topic, content) => {
    const response = await axios.post(url, {
        receiver: usr,
        sender: docid,
        topic: topic,
        content: content,
    });
    console.log(response.data);
    if (response.data.success) {
        return true;
    }
};
export default sendSuggestion;
