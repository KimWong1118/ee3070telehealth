import axios from "axios";
const url = "https://ee3070t2.herokuapp.com/getAllHealthData";
const hds = { "Content-Type": "application/json" };

const getData = async () => {
    const response = await axios.get(url);
    //console.log(response.data);
    return response.data;
};
export default getData;
