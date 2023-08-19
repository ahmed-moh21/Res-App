import React from "react";
import "./home.css";
import Banner from "../Banner/banner";
import img1 from "./home-img/icon-1.png"
import img2 from "./home-img/icon-2.png"
import img3 from "./home-img/icon-3.png"
import img4 from "./home-img/icon-4.png"
import img5 from "./home-img/home-single-img-1.jpg"
import Number from "./Home Component/Numbers/number";
import Cooking from "./Home Component/cooking/cook";
import Subscribe from "./Home Component/Subscribe/subscribe";
import Elementors from "./Home Component/Elementors/elementors";
import Content from "./Home Component/Content/content";




function Home() {
    return (
        <>
            <Banner />
            <div className="home-page">
                <div className="save-ho">
                    <div className="ho1-con">
                        <div className="ho1">
                            <div className="ho-img">
                                <img src={img1} alt="" />{/* 78px */}
                            </div>
                            <div className="ho-inf">
                                <h4> Straight to you </h4>
                                <p> Lorem ipsumski sit est Enter your adress </p>
                            </div>
                        </div>


                        <div className="ho1">
                            <div className="ho-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="ho-inf">
                                <h4> Safe payments </h4>
                                <p> Lorem ipsumski sit est Enter your adress </p>
                            </div>
                        </div>
                    </div>

                    <div className="ho1-con">
                        <div className="ho1">
                            <div className="ho-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="ho-inf">
                                <h4> Costumer Credit </h4>
                                <p> Lorem ipsumski sit est Enter your adress </p>
                            </div>
                        </div>


                        <div className="ho1">
                            <div className="ho-img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="ho-inf">
                                <h4> Whenever time </h4>
                                <p> Lorem ipsumski sit est Enter your adress </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="city">
                <div className="cit-con">
                    <div className="cit-head">
                        <h2>Choose a city to<span>order:</span></h2>
                    </div>

                    <div className="cit-bod">
                        Lorem ipsumski sit est enter your adressd colorist consectetur adipiscing elit sed
                    </div>

                    <div className="cit">
                        <ul>
                            <li>New Taipei City</li>
                            <li>New Belgrade</li>
                            <li>Bangladesh</li>
                            <li>Johannesburg</li>
                            <li>Buenos Aires</li>
                        </ul>
                    </div>
                </div>

                <div className="cit-img">
                    <img src={img5} alt="" />
                </div>
            </div>

            <div>
                <Number />
            </div>

            <div>
                <Cooking />
            </div>

            <div>
                <Subscribe />
            </div>
            
            <div>
                <Elementors />
            </div>

            <div>
                <Content />
            </div>
        </>
    );
}

export default Home;