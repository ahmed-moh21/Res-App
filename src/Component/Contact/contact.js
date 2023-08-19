import React from "react";
import "./contact.css";
import img from "../Home/home-img/map-1.jpg";
import { FaGlobeAfrica, FaHome, FaMailBulk, FaHeadphonesAlt } from "react-icons/fa";
import Content from "../Home/Home Component/Content/content"

function Contact() {
    return (
        <>
            <div className="contact-con">
                <div className="contactpage">
                    <div className="contact-anim">
                        <span>
                            Contact {":)"}
                        </span>
                    </div>
                </div>

                <div className="contact-img">
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <div className="c-ontainer">
                    <form >
                        <label for="fname">First Name</label>
                        <input className="text" type="text" id="fname" name="Name" placeholder="Your name.." />

                        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </div>

                <div className="contact-info">

                    <h2> Budapest </h2>
                    <p>	 <FaGlobeAfrica className="c-icon" />  Budapest </p>
                    <p> <FaHome className="c-icon" />  483 West Avenue 63 </p>
                    <p> <FaMailBulk className="c-icon" />  bridge@example.com </p>
                    <p> <FaHeadphonesAlt className="c-icon" /> +334 6593 33 </p>

                </div>

            </div>

            <div>
                <Content />
            </div>

        </>
    );
}


export default Contact;