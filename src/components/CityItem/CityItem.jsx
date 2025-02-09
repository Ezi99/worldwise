import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();

  return (
    <Link
      to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      className={`${styles.cityItem} ${
        currentCity.id === city.id ? styles["cityItem--active"] : ""
      }`}
    >
      <li>
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>({formatDate(city.date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </li>
    </Link>
  );
}

export default CityItem;
