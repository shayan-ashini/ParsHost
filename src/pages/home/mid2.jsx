
import '../home/master.css'

import '../adv.css'



export default function First() {
    return (
        <div className='col-12 d-flex flex-column align-items-center justify-content-center mt-5'>
            <div className='mid2-wrap col-11 col-lg-9 d-flex justify-content-between flex-wrap '>
  
                <Right />
                <Left />


            </div>

            
            <div className="btn-place col-12 mt-5">
                    <div className="mid2-btn">امنیت سایت رو بالا ببر</div>

                </div>

        </div>
    )
}




function Left() {
    return (
        <div className="mid2-left col-12 col-md-4 mt-3">
            <img src="https://pars.host/media/2021/01/ssl-03-2.svg" alt="" />
        </div>






    )
}
function Right() {
    return (




        <div className="mid2-right col-12 col-md-7  mt-5">

            <div className="mid2-top col-12">
                <h3><img src="https://pars.host/media/2021/03/icon-ssl-01.svg" alt="" />گواهینامه امنیتی SSL سرورپارس</h3>
                <h5>امنیت سایت خود را افزایش دهید</h5>
            </div>

            <div className="mid2-box col-12">
                <div className="side1 col-12 col-md-6 pt-4 pb-4">
                    <h5><i class="bi bi-check-square-fill"></i>صدور آنی</h5>
                    <h5><i class="bi bi-check-square-fill"></i>الگوریتم رمز نگاری SHA-2 </h5>
                    <h5><i class="bi bi-check-square-fill"></i>قابل صدور برای دامنه های ir و بین المللی </h5>
                    <h5><i class="bi bi-check-square-fill"></i> نصب رایگان ( بر روی هاستهای سرورپارس )</h5>
                </div>
                <div className="side2 col-12 col-md-6 pt-4 pb-4">
                    <h5><i class="bi bi-check-square-fill"></i>تایید نام سازمان </h5>
                    <h5><i class="bi bi-check-square-fill"></i> پشتیبانی 24 ساعته</h5>
                    <h5><i class="bi bi-check-square-fill"></i> طول کلید 2048 بیت و کدینگ 256 بیت</h5>
                    <h5><i class="bi bi-check-square-fill"></i> قابل استفاده برای تمامی زیر دامنه های یک دامنه</h5>


                </div>
            </div>



        </div>



    )
}