import React from "react";
import fakeBookings from "./data/fakeBookings.json";

console.log("This is fakeBookings", fakeBookings);
const a = moment(fakeBookings["checkOutDate"]);
const b = moment(fakeBookings["checkInDate"]);
const SearchResults = () => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
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
          {fakeBookings.map((data, key) => {
            return (
              <tr key={key}>
                <th scope="col, row">{data["id"]}</th>
                <td>{data["title"]}</td>
                <td>{data["firstName"]}</td>
                <td>{data["surname"]}</td>
                <td>{data["email"]}</td>
                <td>{data["roomId"]}</td>
                <td>{data["checkInDate"]}</td>
                <td>{data["checkOutDate"]}</td>
                <td>{a.diff(b, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
