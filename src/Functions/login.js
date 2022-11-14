import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/login";
const hds = { "Content-Type": "application/json" };

const Login = async (usr, pass) => {
    console.log(usr);
    console.log(pass);
    const response = await axios.post(url, { username: usr, pwd: pass });
    console.log(response.data);
    if (response.data.success) {
        return true;
    }
};
export default Login;
