import '../home/master.css'

import '../adv.css'



export default function First() {
    return (
        <div className='col-12 d-flex flex-column align-items-center justify-content-center mt-5 mid3'>
            <div className='mid2-wrap col-11 col-lg-9 d-flex justify-content-between flex-wrap '>
                <Left />
                <Right />



            </div>


            <div className="btn-place col-12 mt-5">
                <div className="mid3-btn">  خرید هاست وردپرس</div>

            </div>

        </div>
    )
}




function Left() {
    return (
        <div className="mid3-left col-12 col-md-4 mt-3">
            <img src="https://pars.host/media/2021/05/wordpress-plan-home-21.svg" alt="" />
        </div>






    )
}
function Right() {
    return (




        <div className="mid2-right col-12 col-md-7  mt-5">

            <div className="mid2-top col-12">
                <h3><img src="https://pars.host/media/2021/03/wordpress.svg" alt="" />هاست حرفه ای وردپرس</h3>
                <h5>  با خرید هاست وردپرس و ووکامرس سایتی با سرعت بالا راه اندازی کنید!   </h5>
            </div>

            <div className="mid2-box col-12">
                <div className="side1 col-12 col-md-8 pt-4 pb-4">
                    <h5><i class="bi bi-check-square-fill"></i> پهنای باند نامحدود</h5>
                    <h5><i class="bi bi-check-square-fill"></i> بک آپ گیری هفتگی</h5>
                    <h5><i class="bi bi-check-square-fill"></i>  مجهز به وب سرور LiteSpeed  </h5>
                    <h5><i class="bi bi-check-square-fill"></i>  مجهز به فضای پرسرعت NVMe ( 24 برابر سریعتر نسبت به SSD )</h5>
                </div>

            </div>



        </div>



    )
}