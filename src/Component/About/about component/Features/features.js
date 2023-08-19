import React from "react";
import "./features.css";
import img1 from "../../../Home/home-img/icon-1.png";
import img2 from "../../../Home/home-img/icon-2.png";
import img3 from "../../../Home/home-img/icon-3.png";
import img4 from "../../../Home/home-img/icon-4.png";
import img5 from "../../about-img/single-img-10.png";
import img6 from "../../about-img/single-img-11.png";


function Features() {
    return (
        <div className="feat-page">
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

            <div className="feat-con">
                <div className="featcon1">
                    <div>
                        <h2> What you see is what you get second line of text </h2>

                        <p> But I must explain to you how all this mistaken idea of den ncing pleasure and praising pain was born and I will give you ete account of the system, and expound the actual tea of the great explorer of the truth, the master-buil.
                        </p>

                        <div className="ad-ad">
                            <span>DOWNLOAD APP</span>
                        </div>

                    </div>
                </div>
                <div className="featcon2">
                    <img src={img5} alt="" />
                </div>
            </div>

            <div className="feat-con">

            <div className="featcon2  m-r">
                    <img src={img6} alt="" />
                </div>

                <div className="featcon1  m-l">
                    <div>
                        <h2> Coose whatever! </h2>

                        <p> But I must explain to you how all this mistaken idea of den ncing pleasure and praising pain was born and I will give you ete account of the system, and expound the actual tea of the great explorer of the truth, the master-buil.
                        </p>

                        <div className="ad-ad">
                            <span>DOWNLOAD APP</span>
                        </div>

                    </div>
                </div>
                
            </div>

        </div>

    );
}


export default Features;