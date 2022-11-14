import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getEcgByUser";

const getAllECG = async (usr) => {
    console.log(usr);
    const response = await axios.get(url, { params: { username: usr } });
    console.log(response.data);
    return new Promise((resolve, reject) => {
        let arr = [];
        if (response.data.success == undefined) {
            response.data.map((data) => {
                let objects = [];
                let ecgVal = JSON.parse(data.ecg);
                ecgVal.map((item) => {
                    let obj = { value: item };
                    objects.push(obj);
                });
                let pack = {
                    date: data.created_time,
                    ecg: objects,
                };
                arr.push(pack);
            });
        }
        console.log(arr);
        resolve(arr);
    });
};
export default getAllECG;
