import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FetchStats from '../store/api';
import { GetStats } from '../store/reducer';

const HomePage = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchStats()
        .then((response) => dispatch(GetStats(response)));
    }
  }, []);

  const Africa = CountryStore.filter((item) => item.continent === 'Africa');

  return (
    <ul className="dataUL">
      {
      Africa.map((country) => (
        <Link key={country.country} to={{ pathname: `/country/${country.country}` }}>
          <li className="countryDetails">
            <div>
              <h1>{country.country}</h1>
              <br />
              Population:
              {' '}
              <p>{country.population}</p>
            </div>
            <div>
              <img src={country.country_flag} alt="flag" className="flag" />
            </div>
          </li>
        </Link>
      ))
    }
    </ul>
  );
};

export default HomePage;
