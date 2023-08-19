import React from "react";
import "./content.css";
import logo from "../../home-img/logo.png"
import img0 from "../../home-img/82809345_490913834921362_5890977347195779990_n.jpg";
import img1 from "../../home-img/82835580_115003523395513_5963041190061954244_n.jpg";
import img2 from "../../home-img/82891870_131930161340442_331558749957919665_n.jpg";
import img3 from "../../home-img/83469563_182402723013062_5884073973706766888_n.jpg";
import img4 from "../../home-img/83907108_177637176834150_6865419803277605334_n.jpg";
import img5 from "../../home-img/84159238_268279944135693_7446703002132925565_n.jpg";



function Content() {
    return (
        <div className="cont-ent-page">

            <div className="content1 con-margin">
                <div> <img src={logo} alt="logo" /> </div>
                <p>But I must explain to you how all this mist ncing pleasure and praising.</p>
            </div>

            <div className="content2 con-margin">
                <h2> Lets do this together </h2>
                <p> For Couriers Drivers </p>
                <p> For Restaurants </p>
                <p> For Companies </p>
                <p> For Catering Buisnesses </p>
                <p> For Couriers Drivers</p>
            </div>

            <div className="content3 con-margin">
                <h2> Lets do this together </h2>
                <p> Our Blog </p>
                <p> Our Contact </p>
                <p> Our Support </p>
                <p> Our Services </p>
                <p> Our Delivery </p>
            </div>

            <div className="content4 con-margin">
                <h2>Insta</h2>

                <div>
                    <img src={img0} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>

        </div>
    );
}


export default Content;