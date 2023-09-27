import styles from './Info.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'

const Info = (props) => {
    return (
        <div className={styles.currentInfo}>
            <div className={styles.currentWeatherBox}>
                <div>
                    <img className={styles.pic} src={props.icon}></img>
                    <p>{props.temp}°</p>
                    <p>{props.condition}</p>
                </div>
                <div>
                    <span style={{paddingRight: '40px'}}><FontAwesomeIcon icon={faDroplet} />  {props.humidity}%</span>
                    <span> <FontAwesomeIcon icon={faWind} />  {props.wind} kph</span>
                </div>
            </div>

            <div className={styles.cityBox}>
                <p className={styles.city}>{props.city}</p>
            </div>
        </div>
    );
}


export default Info;