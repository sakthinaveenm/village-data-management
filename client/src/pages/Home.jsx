import React from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../components/register/Signup";

function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Signup />
    </div>
  );
}

export default Home;
