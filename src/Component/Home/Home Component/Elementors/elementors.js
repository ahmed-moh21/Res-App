import React from "react";
import "./elementors.css";
import { TbBrandHipchat } from "react-icons/tb";
import { ImLeaf } from "react-icons/im";
import { IoMdGift } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import img1 from "../../home-img/home-single-img-3.jpg";
import img2 from "../../home-img/home-single-img-4.jpg";



function Elementors(){
    return(
        <div className="elementors-page">
            <div className="eleme-con1">
                <h2>What you see is what you get second line of text</h2>
                <p>Lorem ipsumski sit est enter your adressd color consectetur adipiscing elit sed</p>
                <ul>
                    <li> <TbBrandHipchat className="icon"/> Chat Bot Online Support </li>
                    <li> <ImLeaf className="icon" /> Eco Friendly Delivery Whiecles </li>
                    <li> <IoMdGift className="icon" /> Online Support New Belgrade </li>
                    <li> <AiOutlineStar className="icon" />Exellence Rate </li>
                </ul>
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="eleme-con2">
                <div className="first-elem">
                    <p> Extra Care Fee </p>
                    <p> $<span className="pric"> 33 </span> </p>
                    <p> For Couriers Drivers </p>
                    <p> For Restaurants </p>
                    <p> For Companies </p>
                    <p> For Catering Buisne </p>
                    <button className="button-pa">
                    PURCHASE
                    </button>
                </div>

                <div className="second-elem">
                    <p className="best">BEST VALUE</p>
                    <p> Extra Care Fee </p>
                    <p> $<span className="pric"> 39 </span> </p>
                    <p> For Couriers Drivers </p>
                    <p> For Restaurants </p>
                    <p> For Companies </p>
                    <p> For Catering Buisne </p>
                    <button className="button-pa">
                    PURCHASE
                    </button>
                </div>

            </div>
        </div>
    );
}


export default Elementors;