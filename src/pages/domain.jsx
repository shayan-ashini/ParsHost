
import Footer from './global/footer'
import '../pages/domain/master-domain.css'
import '../pages/adv.css'
import pic3 from './img/3.svg'
import pic4 from './img/4.svg'
import pic5 from './img/5.png'
import pic6 from './img/6.png'

import Box from './domain/box'
import Dommid from './domain/dom-mid'
const Domain = () => {
    return (

        <>
            <div className="col-12 background-domain">
                <div className="domain-wrap col-11 col-md-9  mt-5 mb-5">

                    <div className="right-domain-top col-12 col-md-6 mt-5">
                        <h2>ثبت، خرید و جستجو دامنه</h2>
                        <h5>فعالیت در دنیای مجازی را با ثبت و خرید دامنه ای مناسب آغاز کنید</h5>
                        <h3>بزرگترین مرکز ثبت دامنه در ایران</h3>
                        <div className="domain-inp mt-4 "><input className='inpp' type="text" name="" id="" placeholder='جستجو و ثبت دامنه'/><span>جستوجوی دامین</span></div>
                        <h6><i class="bi bi-check-square-fill"></i> کنترل پنل اختصاصی دامنه</h6>
                        <h6><i class="bi bi-check-square-fill"></i> ارائه خدمات تخصصی دامنه</h6>
                        <h6><i class="bi bi-check-square-fill"></i> پشتیبانی 24 ساعته</h6>
                    </div>

                    <div className="left-domain-top col-10 col-md-3 mt-5  mb-5">
                        <div className="head-pic"> <img src={pic3} alt="" /></div>
                        <div className="head-pic"> <img src={pic4} alt="" /></div>
                        <div className="head-pic"> <img src={pic5} alt="" /></div>
                        <div className="head-pic"> <img src={pic6} alt="" /></div>
                    </div>
                </div>
            </div>

            <Box/>
            <Dommid/>
            <Footer />
        </>

    )
}


export default Domain