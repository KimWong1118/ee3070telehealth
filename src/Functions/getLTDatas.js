import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getHealthDataByUser";

const getLTDatas = async (usr) => {
    console.log(usr);
    const response = await axios.get(url, { params: { username: usr } });
    return new Promise((resolve, reject) => {
        //console.log(response.data);
        let objects = [];
        if (response.data.success == undefined) {
            response.data.map((x, i) => {
                let ctd = new Date(x.created_time);
                const obj = {
                    date: ctd.getDate() + "/" + ctd.getMonth() + "/" + ctd.getFullYear(),
                    blood_pressure_high: x.blood_pressure_high,
                    blood_pressure_low: x.blood_pressure_low,
                    heartbeat: x.heartbeat,
                    room_temperature: x.room_temperature,
                    temperature: x.temperature,
                    blood_oxygen: x.blood_oxygen,
                    humidity: x.humidity,
                    ecg: JSON.parse(x.ecg),
                };
                objects.push(obj);
            });
        }
        resolve(objects);
    });
};
export default getLTDatas;
