import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';

const NavBar = () => {
  const detailsNav = <TiArrowBackOutline className="goBack" />;
  const header = 'STATS BY COUNTRY';
  const location = useLocation();
  const goBack = location.pathname.includes('country') ? detailsNav : '';

  return (
    <nav>
      <div className="nav1">
        <NavLink exact="true" to={{ pathname: '/' }} className="link">
          {goBack}
        </NavLink>
        <h1 className="header1">COVID-19 STATS</h1>
        <span>
          <i className="me-4 fas fa-microphone" />
          <i className="fas fa-cog" />
        </span>
      </div>
      <div className="nav2">
        <h1 className="header2">
          {header}
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
