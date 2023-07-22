
import '../home/master.css'


import React, { useState } from "react";
import Slider from "react-slick";


export default function First() {

    return (


        <div className="slider2 col-12 mt-5">
            <div className="slider2-title col-12">
                <h3>برخی از مشتریان ما</h3>
                <h6>میزبانی شرکت های بزرگی چون شما، افتخار ماست.</h6>
            </div>

            <div className="slider2-wrap col-11 col-lg-9 mt-5">



                <SimpleSlider />



            </div>

        </div>

    )
}




function SimpleSlider() {



  



    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2,
                // dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                // dots: true,
              }
            }
          ]
    };




        



    return (
        <Slider {...settings}>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/azad-uni.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/elmikarbordi-uni.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/03/shahid-beheshti-univercity.jpg" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/National-Development-Fund.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/03/Computer-Guild-Organization.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/National-Development-Fund.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/bank-sepah.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/03/Bank-Day.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/Shaparak-Electronic-Payment.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/Raspina-Software-Company.png" alt="" />
            </div>
            <div className='slide2-box'>
                <img src="https://pars.host/wp-content/uploads/2021/07/Tehran-Computer-Technology-Union.png" alt="" />
            </div>
        </Slider>
    );
}