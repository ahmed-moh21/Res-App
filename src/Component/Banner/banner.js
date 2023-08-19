import React from 'react';
import "./banner.css";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from "./bannerImg/slide-img-1.png";
import img3 from "./bannerImg/slide-img-3.png";
/* import img4 from "./bannerImg/slide-img-4-1.png"; */
import img5 from "./bannerImg/slide-img-5-1.png";
import img6 from "./bannerImg/slide-img-7-1.png";
import img7 from "./bannerImg/slide-img-6.png";


const Banner = () => {

    return (
        <Zoom
            indicators
            onChange={function noRefCheck() {
               /*  let mySlid = document.getElementById("non");
                mySlid.classList.add("anim") */
            }}
            scale={1.4}
        >

            {/*  First slide*/}
            <div
                style={{
                    width: '100%'
                }}
               
            >
                <div className="each-slide-effect">
                    <div className='slid-inf'>
                        <div className='inf1'>
                            <h2>  Straight <span>  to You  </span></h2>
                            <p>Order Food online from over <span> than 2,500 restaurants </span> </p>
                        </div>

                        <div className='inf2'>
                            <span> Make an order </span>
                            <span> Estimate delivery </span>
                            <span> Time estimate </span>
                        </div>
                    </div>
                    <div className='slid-img'>
                        <div className='img-con'>
                            <img className='img-1' src={img6} alt="" />
                            <img className='img-2' src={img7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End of First slide */}

            {/* second slide */}
            <div
                style={{
                    width: '100%'
                }}
            >
                <div className="each-slide-effect" >
                    <div className='slid-inf'>
                        <div className='inf1'>
                            <h2>  Let's <span>  Order <span className='off'> {":)"}  </span> </span></h2>
                            <p>Order Food online from over <span> than 2,500 restaurants </span> </p>
                        </div>

                        <div className='inf2'>
                            <span> Make an order </span>
                            <span> Estimate delivery </span>
                            <span> Time estimate </span>
                        </div>
                    </div>
                    <div className='slid-img'>
                        <div className='img-con'>
                            <img id='non' className='img-1' src={img1} alt="" />
                            <img className='img-2' src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End od second slide */}



        </Zoom>
    );
};

export default Banner;