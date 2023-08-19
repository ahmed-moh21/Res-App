import React from "react";
import "./about.css";
import Features from "./about component/Features/features";
import Content from "../Home/Home Component/Content/content";


function About() {

    window.setTimeout = null;

    return (
        <>
            <div className="about-page">
                <div class="containe-r">
                    <div class="box">

                        <div class="title">
                            <span class="block"></span>
                            <h1>About US<span></span></h1>
                        </div>



                    </div>
                </div>
            </div>

             <div>
                <Features />
            </div>

            <div>
                <Content />
            </div>
        </>
    );
}


export default About;