import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FetchStats from '../store/api';
import { GetStats } from '../store/reducer';

const Country = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = CountryStore.find((country) => country.country === name);

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchStats()
        .then((response) => dispatch(GetStats(response)));
    }
  });

  return (
    <div className="dataContainer">
      <ul className="today">
        <h3>Today&apos;s update:</h3>
        <li>
          New cases:
          {' '}
          {findCountry.todays_cases}
        </li>
        <li>
          Confirmed deaths:
          {' '}
          {findCountry.todays_deaths}
        </li>
        <li>
          New Recoveries:
          {' '}
          {findCountry.todays_recovered}
        </li>
      </ul>
      <ul className="total">
        <h3>Total:</h3>
        <li>
          Confirmed cases:
          {' '}
          {findCountry.total_cases}
        </li>
        <li>
          Recovered:
          {' '}
          {findCountry.total_recovered}
        </li>
        <li>
          Active Cases:
          {' '}
          {findCountry.total_active}
        </li>
        <li>
          Total Tests:
          {' '}
          {findCountry.total_tests}
        </li>
        <li>
          Deaths:
          {' '}
          {findCountry.total_deaths}
        </li>
      </ul>
    </div>
  );
};

export default Country;
