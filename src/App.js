import React from "react";

import Bookings from "./Bookings";
import "./App.css";

import Heading from "./Heading";

import TouristInfoCards from "./TouristInfoCards";

import Restaurant from "./Restaurant";
import Footer from "./Footer";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <SearchResults />
      <Footer
        const
        details={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123456789"
        ]}
      />
    </div>
  );
};

export default App;
