


import React from "react";
import Slider from "react-slick";

import '../home/master.css'



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };


 

  

  return (
    <>

      <section className="col-12">


        <div className="slid-wrap col-11 col-md-9 ">
          <Slider {...settings} className="shayan col-10 ">


            <div className="slid-div col-3 ">


              <div className="top col-11 ">
                <h4 className="ps-5">هاست اشتراکی</h4>
                <img src="https://pars.host/media/2022/01/sharing-host-65.65.svg" alt="" />
              </div>
              <div className="mid col-11  pe-5">
                <p>خرید هاست از اولین مراحل راه اندازی یک وب سایت است. برای شروع کار می توانید از پلن های متفاوت هاست اشتراکی
                  سرورپارس استفاده کنید. همچنین در صورت نیاز می توانید سرویس خود را ارتفا دهید.</p>
                <h6>  ​ قیمت مناسب​ <i class="bi bi-check-circle-fill"></i> </h6>
                <h6> سرغت و امنیت فوق العاده <i class="bi bi-check-circle-fill"></i></h6>
                <h6> پشتیبانی 24 ساعته <i class="bi bi-check-circle-fill"></i></h6>
              </div>

            </div>

            <div className="slid-div col-3 ">


              <div className="top col-11 " dir="rtl">

                <img src="https://pars.host/media/2022/01/ssl2-01-265.65.svg" alt="" />

                <h4 className="ps-5"> گواهینامه ایمنی SSL</h4>
              </div>
              <div className="mid col-11  pe-5">
                <p dir="rtl">در آخرین بروزرسانی های گوگل استفاده از گواهینامه امنیتی SSL برای وب سایت ها ضروری است. SSL به شما کمک می کند
                  تا بتوانید یک ارتباط ایمن میان مرورگر و وب سرور برقرار کنید.</p>
                <h6>  ​ قیمت مناسب​  <i class="bi bi-check-circle-fill"></i> </h6>
                <h6> تهیه شده از روت معتبر <i class="bi bi-check-circle-fill"></i></h6>
                <h6> پشتیبانی  و امکان نصب  <i class="bi bi-check-circle-fill"></i></h6>
              </div>



            </div>



            <div className="slid-div col-3 ">


              <div className="top col-11 ">
                <h4 className="ps-5"> سایت ساز سرور پارس</h4>
                <img src="https://pars.host/media/2022/01/site-builder-03-265.65.svg" alt="" />
              </div>
              <div className="mid col-11  pe-5">
                <p>​ با استفاده از سایت ساز سرورپارس، آسان و ارزان تر از همیشه، می توانید سایت خودتان را دقیقا همان‌طور که دوست
                  دارید بسازید. در کمتر از ده دقیقه یک وب سایت حرفه ای بسازید و کسب درآمد کنید.</p>
                <h6>  ​  پشتیبانی از درگاه بانکی <i class="bi bi-check-circle-fill"></i> </h6>
                <h6>   کاملا سبک با سرعت بالا  <i class="bi bi-check-circle-fill"></i></h6>
                <h6>    دارای قالب حرفه ای <i class="bi bi-check-circle-fill"></i></h6>
              </div>


            </div>




            <div className="slid-div col-3 ">




              <div className="top col-11">
                <h4 className="ps-5">  سرور اختصاصی یا مجازی</h4>
                <img src="https://pars.host/media/2022/01/site-builder-03-265.65.svg" alt="" />
              </div>
              <div className="mid col-11  pe-5">
                <p>​ خرید سرور مجازی و سرور اختصاصی به نوع کسب و کار شما بستگی دارد. اما به صورت کلی سرور های مجازی و اختصاصی با
                  منابع بالا، امکان مدیریت یک سایت پرسرعت و ایمن را فراهم می کنند.</p>
                <h6>  ​     سرعت وامنیت بالا <i class="bi bi-check-circle-fill"></i> </h6>
                <h6>     میزبانی در بهترین دیتاسنتر   <i class="bi bi-check-circle-fill"></i></h6>
                <h6>      دسترسی کانل به سخت افزار  <i class="bi bi-check-circle-fill"></i></h6>
              </div>





            </div>
            <div className="slid-div col-3 ">
              <img src="https://pars.host/wp-content/uploads/2022/11/wp-banner-1-1-1.png" alt="" />
            </div>
            <div className="slid-div col-3 ">
              <img src="https://pars.host/wp-content/uploads/2022/11/wp-banner-1-2-1.png" alt="" />
            </div>

          </Slider>

        </div>










      </section>


      <div className="under-slider mt-5 col-12">
        <div className="under-slider-wrap col-9 ">

          <div>خرید هاست پر ترافیک</div>
          <div>سرور مجازی ایران</div>
          <div>خرید هاست وردپرس</div>
          <div>حرید هاست ویندوز</div>
          <div>خرید هاست لینوکس</div>
          <div>ثبت دامنه</div>

        </div>
      </div>
    </>


  );
}