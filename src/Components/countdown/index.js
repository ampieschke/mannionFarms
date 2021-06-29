import React, {Component} from "react";


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
                    <h3 id='clock'> </h3>
                </div>
        )
    }
}

export default Countdown;