
import '../domain/master-domain.css'

import '../adv.css'


export default function First() {
    return (
        <>
            <Matn />
            <Ox />
            <Mid/>

        </>
    )
}


function Matn() {

    return (

        <div className="domain-matn col-12">

            <p>
                سرورپارس بزرگترین مرجع ثبت و خرید دامنه در ایران، جستجو و انتقال دامنه است. برای انتقال، خرید و ثبت دامنه ir ، دامنه com و سایر پسوندهای دامنه با قیمت های مناسب، همین حالا اقدام کنید. می توانید دامنه موردنظر خود را ارزان تر از همه جا و با بیش از 270 پسوند محبوب به ثبت رسانده و با قدرت و سرعت بالا، وب سایت مورد نظر خود را راه اندازی کنید.
            </p>

        </div>

    )
}



function Ox() {
    return (

        <div className="domain-big col-12">
            <div className="ox-wrap col-11 col-md-11 col-lg-10 mb-5">
                <div className="domain-box m-4 col-5 col-md-3 col-lg-2">
                    <div className="pic"><img src="https://demo.pars.host/parsnew/media/2022/06/dotasia-98.png" alt="" /></div>
                    <h4>552,700 تومان</h4>
                    <h6>سالانه</h6>
                    <div className="box-btn">جستوجو</div>
                </div>
                <div className="domain-box m-4 col-5 col-md-3 col-lg-2">

                    <div className="pic"><img src="https://demo.pars.host/parsnew/media/2022/06/app_logo.png" alt="" /></div>
                    <h4> 732,700 تومان</h4>
                    <h6>سالانه</h6>
                    <div className="box-btn">جستوجو</div>

                </div>
                <div className="domain-box m-4 col-5 col-md-3 col-lg-2">

                    <div className="pic"><img src="https://demo.pars.host/parsnew/media/2022/06/tv.png" alt="" /></div>
                    <h4> 1,381,800 تومان</h4>
                    <h6>سالانه</h6>
                    <div className="box-btn">جستوجو</div>

                </div>
                <div className="domain-box m-4 col-5 col-md-3 col-lg-2">

                    <div className="pic"><img src="https://demo.pars.host/parsnew/media/2022/06/Download.png" alt="" /></div>
                    <h4> 247,500 تومان</h4>
                    <h6>سالانه</h6>
                    <div className="box-btn">جستوجو</div>

                </div>
            </div>
        </div>
    )
}



function Mid(){
    return(

        <div className="domain-mid col-12">

            <div className="domain-mid-pic">
                <img src="https://demo.pars.host/parsnew/media/2022/06/support-SP.svg" alt="" />
            </div>

            <h3>برای خرید دامنه نیاز به مشاوره داری؟</h3>
            <h6 className='pt-4'>همکاران بخش دامنه آماده پاسخ به پرسش های شما هستند،</h6>
            <h6>تا بتوانید با انتخاب یک نام مناسب و ثبت دامنه، کسب و کار خود را راه اندازی کنید.</h6>

            <div className="domain-mid-btn">درخواست مشاوره</div>

        </div>

    )
}