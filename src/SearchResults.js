import React, { useState, useEffect } from "react";
import fakeBookings from "./data/fakeBookings.json";
import moment from "moment";
import "./App.css";
import Bookings from "./Bookings.js";

console.log("This is fakeBookings", fakeBookings);
const a = moment(fakeBookings["checkOutDate"]);
const b = moment(fakeBookings["checkInDate"]);

const SearchResults = ({ bookings }) => {
  const [selected, setSelected] = useState(false);
  const [bookings1, setBookings1] = useState([{ bookings }]);
  function checkFilter() {
    return bookings;
  }

  const onClickRow = () => {
    setSelected(!selected);
  };
  console.log(bookings1);

  return (
    <>
      <table class="table">
        <thead>
          <tr onClick={onClickRow} className={`${selected ? "tr-active" : ""}`}>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Night Stayed</th>
          </tr>
        </thead>

        <tbody>
          {bookings
            ? bookings.map((data, key) => {
                // Installed 'Moment' in order to calculate the 'Night Stayed' Value
                var a = moment(data["checkInDate"], "YYYY/M/D");
                var b = moment(data["checkOutDate"], "YYYY/M/D");
                var diffDays = b.diff(a, "days");
                return (
                  <tr
                    key={key}
                    onClick={onClickRow}
                    className={`${selected ? "tr-active" : ""}`}
                  >
                    <th scope="col, row">{data["id"]}</th>
                    <td>{data["title"]}</td>
                    <td>{data["firstName"]}</td>
                    <td>{data["surname"]}</td>
                    <td>{data["email"]}</td>
                    <td>{data["roomId"]}</td>
                    <td>{data["checkInDate"]}</td>
                    <td>{data["checkOutDate"]}</td>
                    <td>{diffDays}</td>
                  </tr>
                );
              })
            : console.log("ok")}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
