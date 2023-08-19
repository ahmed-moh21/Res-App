import React from "react";
import "./number.css";
import AnimatedNumbers from "react-animated-numbers";


function Number() {

    const [num, setNum] = React.useState(237);
    const [num1, setNum1] = React.useState(538);
    const [num2, setNum2] = React.useState(33);
    const [num3, setNum3] = React.useState(999);


    return (
        <div className="number-sec">

            {/* first section number */}
            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num}
                                fontStyle={{ fontSize: 20 }}
                                configs={[
                                    { "mass": 1, "tension": 30, "friction": 10 },
                                    { "mass": 2, "tension": 40, "friction": 10 },
                                    { "mass": 3, "tension": 30, "friction": 10 }
                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Daily orders</p>
                </div>
            </div>

            {/* second section number */}

            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num1}
                                fontStyle={{ fontSize: 20 }}
                                configs={[
                                    { "mass": 1, "tension": 30, "friction": 10 },
                                    { "mass": 2, "tension": 40, "friction": 10 },
                                    { "mass": 3, "tension": 30, "friction": 10 }
                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Whatever day</p>
                </div>
            </div>

            {/* therd section number */}

            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num2}
                                fontStyle={{ fontSize: 20 }}
                                configs={[
                                    { "mass": 1, "tension": 30, "friction": 10 },
                                    { "mass": 2, "tension": 40, "friction": 10 },
                                    { "mass": 3, "tension": 30, "friction": 10 }
                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Daily orders</p>
                </div>
            </div>

            {/* fource section number */}

            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num3}
                                fontStyle={{ fontSize: 20 }}
                                configs={[
                                    { "mass": 1, "tension": 30, "friction": 10 },
                                    { "mass": 2, "tension": 40, "friction": 10 },
                                    { "mass": 3, "tension": 30, "friction": 10 }

                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Whatever day</p>
                </div>
            </div>

        </div>

    );
}


export default Number