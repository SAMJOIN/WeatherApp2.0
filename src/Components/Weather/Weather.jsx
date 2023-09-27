import { connect } from "react-redux";
import Info from "../Info/Info";
import Forecast from "../Forecast/Forecast";
import styles from './Weather.module.css'


const Weather = (props) => {

    return (
        <div className={styles.weatherBox}>
            {props.weather
                ?
                <div >
                    <Info
                        icon={props.weather.data.current.condition.icon}
                        city={props.city}
                        temp={Math.ceil(props.weather.data.current.temp_c)}
                        condition={props.weather.data.current.condition.text}
                        wind={props.weather.data.current.wind_kph}
                        humidity={props.weather.data.current.humidity}
                    />
                    <Forecast forecast={props.weather.data.forecast} />
                </div>
                : 'Select city'
            }


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        city: state.city
    }
}

const WeatherContainer = connect(mapStateToProps)(Weather);

export default WeatherContainer;

