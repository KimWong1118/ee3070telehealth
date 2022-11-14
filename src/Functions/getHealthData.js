import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getHealthDataByUser";

const getHealthData = async (usr) => {
    console.log(usr);
    const response = await axios.get(url, { params: { username: usr } });
    return new Promise((resolve, reject) => {
        //console.log(response.data);
        let objects = [];
        if (response.data.success == undefined) {
            response.data.sort((a, b) => {
                return new Date(a.created_time) - new Date(b.created_time);
            });
            response.data.map((x, i) => {
                if (i < 10) {
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
                    };
                    objects.push(obj);
                }
            });
        }
        resolve(objects);
    });
};
export default getHealthData;
