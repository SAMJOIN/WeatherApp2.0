import axios from "axios";


const weatherAPI = {

    async getWeather(city) {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=ae8b472c16094750b43133918232109`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

export default weatherAPI;