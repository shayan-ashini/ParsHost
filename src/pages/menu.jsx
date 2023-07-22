import { Outlet, Link } from 'react-router-dom'

import '../pages/menu.css'

const Menu = () => {


    function open() {

        document.getElementById('close').style.right = "0"

    }

    return (

        <>

            <div className="chat" onClick={() => {
                document.getElementsByClassName('chat-box')[0].style.display = 'flex'
                document.getElementsByClassName('chat')[0].style.display = 'none'



               
                setTimeout(() => {
                    document.getElementsByClassName('chat-box')[0].style.transform = 'translateY(0)'
                    

                }, 400);

            }}>
                <i class="bi bi-chat-dots"></i>
            </div>

            <div className="chat-box">
                <div className="chat-top col-12">

                    <div className="chat-info col-9">
                        <div className="chat-pic"><img src="https://cdn.goftino.com/static/assets/img/profile.png" alt="" /></div>
                        <div className="chat-title">
                            <h5>پشتیبانی فروش</h5>
                            <h6>پاسخگوی سوالات شما هستیم</h6>
                        </div>
                    </div>

                    <div className="chat-close col-2" onClick={() => {



                        document.getElementsByClassName('chat-box')[0].style.transform = 'translateY(500px)'
                        setTimeout(() => {
                            document.getElementsByClassName('chat-box')[0].style.display = 'none'
                            document.getElementsByClassName('chat')[0].style.display = 'flex'


                        }, 400);


                    }}> <span><i class="bi bi-x"></i></span></div>
                </div>
                <div className="chat-body col-12">

                    <div className="chat-mini col-10">
                        <h6>برای شروع گفتگو لطفا فرم زیر را تکمیل کنید</h6>
                        <input type="text" placeholder='لطفا ایمیل خود را وارد کنید' />

                        <div className="chat-btn col-12">
                            <button>شروع</button>
                        </div>

                    </div>

                </div>
            </div>

            <header className='col-12 d-none d-lg-flex mt-1 '>

                <nav className='col-11 col-lg-10 col-xl-9'>
                    <div className="logo col-2 pt-3">
                        <img src="https://pars.host/wp-content/uploads/2021/10/logopars.png" alt="" />
                    </div>
                    <ul className=' all col-8  mt-5' >
                        <li> <Link to='/' > <i class="bi bi-house-door-fill"></i></Link> </li>
                        <li className='sub11'> <Link to='/host' > هاست </Link>
                            <Sub1 />
                        </li>
                        <li className='sub22'><Link to='/domain'>دامنه</Link>
                            <Sub2 />
                        </li>
                        <li> <Link to='/server' > سرور</Link> </li>
                        <li className='sub33'><Link to='/site'>سایت ساز</Link>
                            <Sub3 />
                        </li>
                        <li className='d-none d-lg-flex'><Link to='/ssl'>گواهینامه SSL</Link></li>
                        <li><Link to='/work'>کسب درآمد</Link></li>
                        <li className='sub44'><Link to='/support'>پشتیبانی و تماس </Link>
                            <Sub4 />
                        </li>
                        <li>وبلاگ</li>
                    </ul>
                    <div className="call col-1 pt-1 mt-5 mb-2">
                        <div className="btnn1 mt-2 mb-1">ورود و ثبت نام</div>
                        021-49198
                    </div>
                </nav>
            </header>



            <div className="ham d-lg-none ">

                <HamSub />

                <div className="logo-ham pt-1">
                    <i class="bi bi-list" id='open' onClick={open}></i>
                    <img className='ms-5 col-4 col-sm-3 ' src="https://pars.host/wp-content/uploads/2021/10/logopars.png" alt="" />
                </div>
            </div>

            <Outlet />
        </>

    )
}




const HamSub = () => {
    return (


        <div className="move-menu " id='close'>

            <div className="close col-12" >
                <i class="bi bi-x-square-fill" onClick={() => {
                    document.getElementById('close').style.right = "-1000px"


                }}></i>
            </div>
            <h5 className='col-12 pt-3 pe-3'><Link className='hcolor' to='/'>صفحه اصلی </Link></h5>

            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 pt-2'><Link className='hcolor' to="/host" >هاست</Link> </h6>

                <div className="icon-box ms-3 mt-2" >
                    <i class="bi bi-caret-down-fill" onClick={() => {
                        document.getElementById('sub1').classList.toggle('auto')


                    }}></i>
                </div>
                <ul id='sub1' className='sub-ul ' >

                    <li>هاست لینوکس</li>
                    <li>هاست وردپرس</li>
                    <li>هاست پربازدید</li>
                    <li>هاست لینوکس حرفه ای</li>
                    <li>هاست ویندوز</li>
                    <li>هاست دانلود</li>
                    <li>نمایندگی لینوکس</li>
                    <li>نمایندگی ویندوز</li>
                    <li>هاست بکاپ</li>

                </ul>
            </div>





            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 pt-2'> <Link className='hcolor' to='/domain'>دامنه</Link> </h6>

                <div className="icon-box ms-3 mt-2" onClick={() => {
                    document.getElementById('sub2').classList.toggle('auto')


                }}>
                    <i data-num='2' class="bi bi-caret-down-fill"></i>
                </div>
                <ul id='sub2' className='sub-ul ' >

                    <li> هزینه ثبت دامنه</li>
                    <li> ثبت دامنه جدید</li>
                    <li> نمایندگی ثبت</li>
                    <li>دامنه های تازه آزاد شده</li>
                    <li>انتقال دامنه</li>


                </ul>
            </div>







            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 pt-2'> <Link className='hcolor' to='/server'>سرور</Link> </h6>

                <div className="icon-box ms-3 mt-2" >
                    <i data-num='2' class="bi bi-caret-down-fill" onClick={() => {
                        document.getElementById('sub3').classList.toggle('auto')


                    }}></i>
                </div>
                <ul id='sub3' className='sub-ul ' >

                    <li>سرور مجازی ایران </li>
                    <li> سرور اختصاصی مجازی</li>
                    <li> سرور اختصاصی ایران</li>
                    <li>سرور اختصاصی انگلیس</li>
                    <li>سرور اختصاصی آلمان</li>
                    <li>سرور اختصاصی فرانسه</li>
                    <li>سرور اختصاصی هلند</li>
                    <li>سرور اختصاصی کانادا</li>
                    <li>خدمات میزبانی سرور</li>

                </ul>
            </div>




            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 pt-2'> <Link className='hcolor' to='/site'>سایت ساز </Link></h6>

                <div className="icon-box ms-3 mt-2" >
                    <i data-num='2' class="bi bi-caret-down-fill" onClick={() => {
                        document.getElementById('sub4').classList.toggle('auto')


                    }}></i>
                </div>
                <ul id='sub4' className='sub-ul ' >
                    <li>   سایت ساز سرور پارس</li>
                    <li>  نمایندگی سایت ساز </li>
                </ul>
            </div>




            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 '> <Link className='hcolor' to='/ssl'>گواهینامه SSL</Link> </h6>

            </div>

            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 pt-2'>  <Link className='hcolor' to='/work'>کسب درآمد</Link> </h6>

            </div>




            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 pt-2'> <Link className='hcolor' to='/support'>پشتیبانی و تماس</Link> </h6>

                <div className="icon-box ms-3 mt-2" >
                    <i data-num='2' class="bi bi-caret-down-fill" onClick={() => {
                        document.getElementById('sub5').classList.toggle('auto')


                    }}></i>
                </div>
                <ul id='sub5' className='sub-ul ' >
                    <li>  چرا سرور پارس انتحاب نماییم ؟ </li>
                    <li>  شرایط قرارداد </li>
                    <li>   لیست مشتریان </li>
                    <li>   شماره حساب ها</li>
                    <li>  تماس با ما </li>
                    <li>  درخواست پشتیبانی </li>
                    <li>   مراجعه حضوری</li>
                    <li>    فرصت شغلی</li>
                </ul>
            </div>






            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 '> وبلاگ  </h6>
            </div>

            <div className="menu-ham-sub col-12">

                <h6 className='pe-3 pt-2'>  021-41948  </h6>

            </div>





        </div>



    )
}


const Sub1 = () => {
    return (

        <ul className='sub1 col-12'>

            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/linux.svg" alt="" />
                    هاست لینوکس
                    <span className='col-12 menu-size'>نامحدود ترافیک ، مناسب اسکریپت های تحت PHP</span>
                </div>

                <div className="p1 ">

                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/linux-pro.svg" alt="" /> هاست لینوکس حرفه ای
                    <span className='col-12'>انقلابی در هاست لینوکس با تخصیص منابع بالا و سرعت لود بارو نکردنی</span>

                </div>


                <div className="p1 ">

                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/download.svg" alt="" /> هاست دانلود
                    <span className='col-12'>انقلابی در هاست لینوکس با تخصیص منابع بالا و سرعت لود بارو نکردنی</span>

                </div>
            </div>



            <div className="sub-box col-4 mt-4 ">

                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/wp.svg" alt="" /> هاست وردپرس
                    <span className='col-12'>کانفیگ ویژه وردپرس، هارد پرسرعت NVMe و وب سرور LiteSpeed</span>
                </div>
                <div className="p1 ">
                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/windows.svg" alt="" /> هاست ویندوز
                    <span className='col-12'>نامحدود ترافیک، کنترل پنل Plesk جهت مدیریت هاست ویندوز</span>
                </div>


                <div className="p1 ">

                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/reseller-linux.svg" alt="" /> نمایندگی هاست لینوکس
                    <span>بدون دغدغه فکري کار تجاري هاستینگ خود را راه اندازي نمایید</span></div>

            </div>




            <div className="sub-box col-4 mt-4 ">



                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/hightt.svg" alt="" /> هاست وردپرس
                    <span>ورودی بالای کاربر بدون افت سرعت وب سایت</span></div>
                <div className="p1 ">

                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/windows-pro.svg" alt="" /> هاست ویندوز حرفه ای
                    <span>مجهز به هارد NVMe با پردازنده و سخت افزار قوی تر، پهنای باند نامحدود</span></div>

                <div className="p1 ">


                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/menu/reseller-windows.svg" alt="" /> نمایندگی هاست ویندوز
                    <span>بدون دغدغه فکري کار تجاري هاستینگ خود را راه اندازي نمایید</span></div>





            </div>

            <div className="full col-12">مشاهده تمامی سرویس های هاست</div>

        </ul>
    )
}



const Sub2 = () => {
    return (

        <ul className='sub2 col-12'>
            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/DOMAIN0.svg" alt="" />
                    هزینه ثبت دامنه
                    <span className='col-12'>نامحدود ترافیک ، مناسب اسکریپت های تحت PHP</span>
                </div>

                <div className="p1 mt-5">

                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/DOMAIN4.svg" alt="" /> دامنه های تازه آزاد شده
                    <span className='col-12'>انقلابی در هاست لینوکس با تخصیص منابع بالا و سرعت لود بارو نکردنی</span>

                </div>
            </div>



            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/DOMAIN1.svg" alt="" />
                    ثبت دامنه جدید
                    <span className='col-12'>نامحدود ترافیک ، مناسب اسکریپت های تحت PHP</span>
                </div>

                <div className="p1 mt-5">

                    <img src="https://pars.host/wp-content/themes/pars.host/img/header/DOMAIN3.svg" alt="" /> انتقال دامنه
                    <span className='col-12'>انقلابی در هاست لینوکس با تخصیص منابع بالا و سرعت لود بارو نکردنی</span>

                </div>
            </div>




            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/DOMAIN2.svg" alt="" />
                    نمایندگی ثبت دامنه
                    <span className='col-12'>نامحدود ترافیک ، مناسب اسکریپت های تحت PHP</span>
                </div>


            </div>






        </ul>

    )
}



const Sub3 = () => {
    return (
        <ul className='sub3 col-12'>
            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-14.svg" alt="" />
                    سایت ساز سرور پارس
                    <span className='col-12'>بدون کوچکترین دانش برنامه نویسی وب سایت خود را راه اندازی کن</span>
                </div>

            </div>

            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-15.svg" alt="" />
                    نماینده سایت ساز سرور پارس
                    <span className='col-12'>کسب درآمد از سرویسی اختصاصی و با امکانات فراوان</span>
                </div>


            </div>

        </ul>
    )
}



const Sub4 = () => {
    return (

        <ul className='sub4 col-12'>

            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-16.svg" alt="" />
                    چرا سرور پارس را انتخاب نماییم؟
                    <span className='col-12'></span>
                </div>
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-17.svg" alt="" />
                    شماره حساب ها
                    <span className='col-12'></span>
                </div>
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-22.svg" alt="" />
                    ارسال درخواست پشتیبانی
                    <span className='col-12'></span>
                </div>


            </div>
            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-20.svg" alt="" />
                    شرایط قرارداد در میزبانی وب سرورپارس
                    <span className='col-12'></span>
                </div>
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-25.svg" alt="" />
                    تماس با ما
                    <span className='col-12'></span>
                </div>
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-26.svg" alt="" />
                    درخواست مراجعه حضوری
                    <span className='col-12'></span>
                </div>


            </div>
            <div className="sub-box col-4 mt-4 ">
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-24.svg" alt="" />
                    لیست مشتریان سرورپارس
                    <span className='col-12'></span>
                </div>
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/icon-18.svg" alt="" />
                    بانک پرسش و پاسخ
                    <span className='col-12'></span>
                </div>
                <div className="p1 "><img src="https://pars.host/wp-content/themes/pars.host/img/header/hiring.svg" alt="" />
                    فرصت های شغلی
                    <span className='col-12'></span>
                </div>


            </div>




        </ul>

    )
}

export default Menu