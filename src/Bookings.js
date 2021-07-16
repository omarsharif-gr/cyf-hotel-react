import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let searchFilter = bookings.filter(guest => {
      let formatSearchValue = searchVal.toLowerCase();
      return (
        guest.firstName.toLowerCase().includes(formatSearchValue) ||
        guest.surname.toLowerCase().includes(formatSearchValue)
      );
    });
    setBookings(searchFilter);
  };

  console.log(bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
