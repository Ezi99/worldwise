import styles from "./CountryList.module.css";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import CountryItem from "../CountryItem/CountryItem";
import { useCities } from "../../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );

  const countries = [];

  cities.forEach((city) => {
    if (!countries.map((country) => country.country).includes(city.country)) {
      countries.push({ country: city.country, emoji: city.emoji, id: city.id });
    }
  });

  return (
    <ul className={styles.cityList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
