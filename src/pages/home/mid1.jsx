import '../home/master.css'

import '../adv.css'



export default function First() {
    return (

        <section className='mid1 col-12  mt-5' dir='rtl'>
            <div className="title col-12 pt-5">
                <h3>   با سرور‌پارس <span>اعتماد و اطمینان</span> را برای بازدیدکنندگان خود بیافزایید</h3>
                <h6>ایده‌آل‌ترین گزینه برای میزبانی وب سایت شما</h6>
            </div>

            <div className='col-12 d-flex justify-content-center'>
                <div className='col-11 col-lg-9 d-flex justify-content-between flex-wrap'>
                    <Left />
                    <Right />


                </div>
            </div>

            <Bottom />


        </section>
    )
}


function Left() {
    return (

        <div className="mid1-right col-12 col-md-7  mt-5">
            <h3 className=''>تجربه بی نظیر در تکنولوژی‌ و قدرت سخت افزاری میزبانی سرور ها</h3>
            <p className='pt-3 pt-md-0 '>پلتفرم های میزبانی ما به طور خاص با جدیدترین فناوری های روز دنیا ما را قادر می‌سازند تا بارگذاری سریع تر و سطح بالاتری از محافظت در برابر حملات خاص را ارائه دهیم تمام ما در سرورپارس تلاشمان تا به امروز تمرکز بر روی ارتقا کسب و کار و تجارت شما بوده است تا در هنگام استفاده از سرور ها بهترین عملکرد را داشته باشید. سرورپارس با ارائه سطح بالای کیفیت به همراه بهترین و به روز ترین سخت افزار و نرم افزار تا به امروز میزبان بیش از 20 هزار کسب و کار بوده است. ما خود را مسئول می‌دانیم اطمینان حاصل کنیم که همه زیرساخت‌های سرور‌هایمان هر روز نه تنها در ایران، مکان‌های اروپایی، بلکه در سرتاسر جهان به‌طور روان و بدون مشکل اجرا می‌شوند. در سرور پارس انواع سرور های اختصاصی، سرور های مجازی و اشتراکی و سرور اختصاصی مجازی برای هر نوع وب سایت و پلن های متناسب با شرایط و نیاز شما با پشتیبانی 24/7 و مقرون به صرفه ارائه می‌شود. تکنسین های بسیار ماهر ما هر گونه مشکلی را به صورت حرفه ای و سریع حل می‌کنند و به شما این امکان را می دهند روی تجارت خود تمرکز کنید.</p>

            <div className="mid1-btn mt-5 mb-5">لیست سرور ها</div>
        </div>





    )
}
function Right() {
    return (

        <div className="mid1-left col-12 col-md-4 mt-3">
            <img src="https://pars.host/wp-content/uploads/2022/11/SERVER-27-27.svg" alt="" />
        </div>
    )
}



function Bottom() {
    return (

        <div className="mid1-bottom col-12">

            <div className="mid1-bottom-left col-9 col-md-6 col-lg-5 mt-3">
                <h3>ویژگی <span> فوق العاده</span> سایت ساز سرورپارس</h3>
                <h5>سایتت رو شبیه سایتی که دوست داری بساز، کافیه اسمش رو در کادر وارد کنی.</h5>
            </div>
            <div className="mid1-bottom-right d-flex col-9 col-md-6  col-lg-5 mt-3">
                <input className='pe-3' type="text " placeholder='آدرس سایت رو وارد کن'/>
                <div className="mid1-bottom-btn ">
                    کپی کن

                </div>
            </div>



        </div>
    )
}