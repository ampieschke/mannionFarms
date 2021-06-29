import React, {Component} from "react";


class Countdown extends Component {
    render(){

        const countDownDate = new Date('Aug 28, 2021 14:00:00').getTime();
        const x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
            // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("clock").innerHTML = days + " Days to Draft Day";
        }, 1000);

        return(

            
                <div>
                    <h2 id='clock'> </h2>
                </div>





        )
    }
}

export default Countdown;