import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/login/dr";
const hds = { "Content-Type": "application/json" };

const DrLogin = async (usr, pass) => {
    const response = await axios.post(url, { username: usr, pwd: pass });
    console.log();
    console.log(response.data);
    if (response.data.success) {
        return true;
    }
};
export default DrLogin;
