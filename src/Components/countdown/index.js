import React, {Component} from "react";
import "./style.css";
import Alert from 'react-bootstrap/Alert'


class Countdown extends Component {
    render(){

        const countDownDate = new Date('Aug 28, 2021 14:00:00').getTime();
        const x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));

            document.getElementById("clock").innerHTML = days + " Days to Draft Day";
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Happy Draft Day!";
              }
        }, 1000);

        return(
                <div>
                         <Alert variant="danger">
        <Alert.Heading id="clock"></Alert.Heading>
      </Alert>
                </div>
        )
    }
}

export default Countdown;