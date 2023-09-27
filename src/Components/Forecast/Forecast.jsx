import styles from './Forecast.module.css'

const Forecast = (props) => {

    const getDay = (day) => {
        switch (day) {
            case 0:
                return 'Su'
            case 1:
                return 'Mo'
            case 2:
                return 'Tu'
            case 3:
                return 'We'
            case 4:
                return 'Th'
            case 5:
                return 'Fr'
            case 6:
                return 'Sa'
        }
    }

    let forecast = props.forecast.forecastday.map((el) => {
        return (
            <div className={styles.days}>
                <img className={styles.pic} src={el.day.condition.icon}></img>
                <p>{Math.ceil(el.day.maxtemp_c)}°</p>
                <p>{getDay(new Date(el.date_epoch * 1000).getDay())}</p>
            </div>
        )
    })

    return (
        <div>
            <hr className={styles.line}></hr>
            {forecast}
        </div>
    );
}


export default Forecast;