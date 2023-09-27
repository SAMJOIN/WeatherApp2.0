import { useState } from "react";
import { connect } from "react-redux";
import { getCity, getWeather } from "../../Redux/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Search.module.css'

const Search = (props) => {

    const [city, setCity] = useState('');

    const getInfo = () => {
        props.getCity(city);
        props.getWeather(city);
    }

    return (
        <div>
            <input className={styles.input} placeholder="Select city" onChange={(e) => {setCity(e.currentTarget.value)}} value={city}></input>
            <button className={styles.searchButton} onClick={getInfo} disabled={props.isFetching}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        city: state.city,
        isFetching: state.isFetching
    }
}

const mapDispatchToProps = {
    getCity,
    getWeather
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer;