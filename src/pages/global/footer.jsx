
import '../global/style.css'




const Footer = () => {
    return (

        <footer className='m-0 p-0'>


            <TopFoot/>
            <div className="footer-box col-11 col-md-9 mb-2 ">
                <Right />
                <Left />




            </div>
            <Last />









        </footer>



    )
}



function Left() {
    return (

        <div className="left col-12 col-lg-3  mb-5 mt-5">

            <h6>نمادهای اعتماد الکترونیکی</h6>
            <div className="namad mt-2">
                <img className='col-3 ' src="https://pars.host/namad/logo-anjooman-senfi.png" alt="" />
                <img className='col-3 ' src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/ecunion-8b792f56.png" alt="" />
                <img className='col-3 ' src="https://www.digikala.com/statics/img/png/rezi.png" alt="" />

            </div>
            <div className="phone mt-3 p-2" >تماس با ما :41948-021 <i class="bi bi-telephone-fill"></i></div>
            <div className="hami mt-3">
                <img src="https://pars.host/wp-content/uploads/2022/11/logo-01-1.svg" alt="" />
                <h6>حامی کسب و کارهای آنلاین هستیم.</h6>
            </div>



        </div>

    )
}
function Right() {
    return (

        <div className="right col-12 col-lg-8  mb-5 mt-5">
            <div className="box col-6 col-md-4 ">
                <h3 className='p-1'>خرید هاست</h3>
                <li>هاست وردپرس</li>
                <li>هاست لینوکس</li>
                <li>هاست اختصاصی</li>
                <li>هاست ویندوز</li>
                <li>هاست دانلود</li>
            </div>
            <div className="box col-6 col-md-4 ">
                <h3 className='p-1'>سرور مجازی</h3>
                <li>سرور مجازی ایران</li>
                <li>سرور مجازی المان</li>
                <li>سرور مجازی کانادا</li>
                <li>سرور مجازی فرانسه</li>
                <li> سرور مجازی انگلستان</li>

            </div>
            <div className="box col-6 col-md-4 ">
                <h3 className='p-1'> ارتباط با ما</h3>
                <li> چرا سرورپارس</li>
                <li> تماس با سرورپارس</li>
                <li> مشتریان سرورپارس</li>
                <li> بانک پرسش و پاسخ</li>
                <li> فرصت های شغلی</li>

            </div>
            <div className="box col-6 col-md-4 ">
                <h3 className='p-1'>ثبت دامنه </h3>
                <li>ثبت دامنه </li>
                <li> ثبت دامنه Ir</li>
                <li> ثبت دامنه Net</li>
                <li> ثبت دامنه Org</li>
                <li>ثبت دامنه Com </li>

            </div>
            <div className="box col-6 col-md-4 ">
                <h3 className='p-1'>سرور اختصاصی </h3>
                <li>سرور اختصاصی ایران </li>
                <li> سرور اختصاصی المان</li>
                <li> سرور اختصاصی کانادا</li>
                <li> سرور اختصاصی فرانسه</li>
                <li> سرور اختصاصی انگلستان</li>

            </div>
            <div className="box col-6 col-md-4 ">
                <h3 className='p-1'>خدمات بیشتر </h3>
                <li> سایت ساز</li>
                <li> کسب درآمد</li>
                <li>گواهینامه امنیتی SSL </li>


            </div>
        </div>

    )
}



function Last() {

    return (
        <div className="last col-9 mb-3">
            <div className="note col-6">    ارائه شده توسط  <span>  سرور پارس  </span>  </div>
            <div className="icon col-6">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-telegram"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-facebook"></i>
            </div>
            
        </div>
    )

}




function TopFoot(){
    return(
        <div className="top-foot col-12">

            <div className="top-one col-11 col-md-9">

                <div className="picc col-2 mt-4 mb-4">
                    <img src="https://pars.host/wp-content/themes/pars.host/img/footer/TICKET.svg" alt="" />
                    تیکت
                </div>
                <div className="picc col-2 mt-4 mb-4">
                    <img src="https://pars.host/wp-content/themes/pars.host/img/footer/TELEGRAM.svg" alt="" />
                    تلگرام
                </div>
                <div className="picc col-2 mt-4 mb-4">
                    <img src="https://pars.host/wp-content/themes/pars.host/img/footer/TEL.svg" alt="" />
                    تماس
                </div>
                <div className="picc col-2 mt-4 mb-4">
                    <img src="https://pars.host/wp-content/themes/pars.host/img/footer/NSTAGRAM.svg" alt="" />
                    اینستاگرام
                </div>
                <div className="picc col-2 mt-4 mb-4">
                    <img src="https://pars.host/wp-content/themes/pars.host/img/footer/KNOWLEDGE.svg" alt="" />
                    دانشنامه
                </div>


            </div>

        </div>
    )
}

export default Footer