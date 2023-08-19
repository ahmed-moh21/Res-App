import React from "react";
import "./cook.css";
import img from "../../home-img/single-img-10.png"

function Cooking() {
    return (
        <div className="cook-page">
            <div className="page-con">
                <div className="cook-con">
                    <div className="cook-inf">
                        <h2> Not cooking <span> today! </span> </h2>
                        <p> But I must explain to you how all this mistaken idea of den ncing pleasure and praising pain was born and I will give you ete account of the system, and expound the actual tea of the great explorer of the truth, the master-buil ain was born and I will give us now. </p>
                    </div>
                    <div className="ad-ad">
                        <span>DOWNLOAD APP</span>
                    </div>
                </div>

                <div className="cook-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}


export default Cooking;