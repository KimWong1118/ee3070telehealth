import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/addAccount";
// const hds = { "Content-Type": "application/json" };

const Signup = async (usr, pass, mail, full_name, ages, sex, hgt, wgt, code) => {
    console.log(usr);
    console.log(pass);
    const response = await axios.post(url, {
        username: usr,
        fullname: full_name,
        pwd: pass,
        device_code: code,
        age: ages,
        height: hgt,
        weight: wgt,
        gender: sex,
        email: mail,
    });
    console.log(response.data);
    if (response.data.success) {
        return true;
    }
};
export default Signup;
