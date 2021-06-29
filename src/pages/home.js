import React from "react";
import Jumbo from "../Components/jumbo";
import Subnews from "../Components/subnews";
import Countdown from "../Components/countdown";
import Row from 'react-bootstrap/Row'

function Home() {
  return (
    <div>
      <Countdown />
      <Jumbo />
      <Subnews />
      <Row>
    {/* Going to migrate SubNews and Standings here */}
      </Row>
    </div>
  );
}

export default Home;
