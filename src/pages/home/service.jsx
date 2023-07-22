

import '../home/master.css'



export default function First(){
    return(

        <div className="Service d-flex flex-column col-12">

            <div className="service-title col-12 mt-5 pt-5">
                <h3>خدماتی دیگر در سرورپارس</h3>
                <h6>با تیم حرفه ای که داریم بهترین خدمات را با شما ارائه میدهیم</h6>

            </div>

            <div className="service-wrap col-11 col-md-10 col-lg-9 mt-5">

                <div className="service-box col-4 col-md-2">
                    <img src="https://pars.host/media/2021/06/high-trafic-menu-01.svg" alt="" />
                    هاست پربازدید
                </div>
                <div className="service-box col-4 col-md-2">
                    <img src="https://pars.host/media/2021/05/server-support.svg" alt="" />
                    پشتیبانی سرور
                </div>
                <div className="service-box col-4 col-md-2">
                    <img src="https://pars.host/media/2021/05/lisence.svg" alt="" />
                    لایسنس کنترل پنل
                </div>
                <div className="service-box col-4 col-md-2">
                    <img src="https://pars.host/media/2021/05/dedicated-panel.svg" alt="" />
                    پنل اختصاصی
                </div>
                <div className="service-box col-4 col-md-2">
                    <img src="https://pars.host/media/2021/05/hard-ware-support.svg" alt="" />
                    پشتیبانی سخت افزار


                </div>
                <div className="service-box col-4 col-md-2">
                    <img src="https://pars.host/media/2021/07/server.abroad.svg" alt="" />
                    سرورهای مجازی 
                </div>

            </div>

        </div>
        
    )
}