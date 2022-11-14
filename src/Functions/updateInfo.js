import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/updateInfo";
// const hds = { "Content-Type": "application/json" };

const updateInfo = async (usr, pass, mail, name, age1, sex, hgt, wgt, code) => {
    // console.log(usr);
    // console.log(pass);
    const response = await axios.post(url, {
        username: usr,
        pwd: pass,
        fullname: name,
        device_code: code,
        age: age1,
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
export default updateInfo;
