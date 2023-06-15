import React, { useState } from 'react';
import '../header/header.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from './assets/lungs.svg';

const Header = () => {
  const [menuAñoOpen, setMenuAñoOpen] = useState(false);
  const [menuDatosOpen, setMenuDatosOpen] = useState(false);
  const [menuCasosOpen, setMenuCasosOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleMenuCasos = () => {
    setMenuCasosOpen(!menuCasosOpen);
  };

  const toggleMenuAño = () => {
    setMenuAñoOpen(!menuAñoOpen);
  };

  const toggleMenuDatos = () => {
    setMenuDatosOpen(!menuDatosOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const yearRange = {
    startDate: new Date('2022-01-01'),
    endDate: new Date('2022-12-31'),
  };

  return (
    <section className="StyleAll">
      <nav className="StyleHeader">
        <ul className="StyleListNav">
          <picture className="Logo">
            <img className="LOGO" src={logo} alt="" />
          </picture>
          <li>
            <span onClick={toggleMenuAño}>Mes</span>
            {menuAñoOpen && (
              <ul className="submenu-list">
                <li>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    minDate={yearRange.startDate}
                    maxDate={yearRange.endDate}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleMenuDatos}>territorio</span>
            {menuDatosOpen && (
              <ul className="submenu-list">
                <li>Submenú A</li>
                <li>Submenú B</li>
                <li>Submenú C</li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleMenuCasos}>casos</span>
            {menuCasosOpen && (
              <ul className="submenu-list">
                <li>Submenú D</li>
                <li>Submenú E</li>
                <li>Submenú F</li>
              </ul>
            )}
          </li>
          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
