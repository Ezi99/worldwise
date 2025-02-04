import CityItem from "../CityItem/CityItem";
import styles from "./CityList.module.css";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
