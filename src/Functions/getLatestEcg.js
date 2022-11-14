import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getLatestEcgByUser";

const getLatestEcg = async (usr) => {
    console.log(usr);
    const response = await axios.get(url, { params: { username: usr } });
    console.log(response.data);
    return new Promise((resolve, reject) => {
        let datas = JSON.parse(response.data[0].ecg);
        console.log(datas);
        let objects = [];
        if (response.data.success == undefined) {
            datas.map((item) => {
                let obj = { value: item };
                objects.push(obj);
            });
        }
        resolve(objects);
    });
};
export default getLatestEcg;
