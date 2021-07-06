import React from "react";
import Jumbo from "../Components/jumbo";
import SubContent from "../Components/subContent";
import Countdown from "../Components/countdown";
// import Row from 'react-bootstrap/Row'
// import Standings from '../Components/standings'

function Home() {
  return (
    <div>
      <Countdown />
      <Jumbo />
      {/* <Row> */}
      <SubContent />
      {/* <Standings /> */}
      {/* </Row> */}
    </div>
  );
}

export default Home;
