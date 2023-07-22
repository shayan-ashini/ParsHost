
import '../pages/work.css'

import Footer from './global/footer'







const Work = () => {
    return (

        <>

            <div className="work co-12">
                <div className="work-wrap col-10 col-md-9 me-5">

                    <h3>کسب درآمد</h3>
                    <h6>کسب درآمد دائمی از فروش سرویس ها</h6>
                    <h6>واریز آنی سود بدست آورده</h6>


                </div>
            </div>


            <First />


            <div className="top-svg col-12 mt-5 pb-5" >
                <h1 className='pt-5'>مراحل کسب درآمد</h1>
            </div>


            <div className="work-svg col-12  mb-5">



            </div>


            <Footer />











        </>

    )
}



function First() {
    return (


        <div className="work-big col-12">
            <div className="work-big-wrap col-10 col-md-9 mt-5 mb-3">


                <div className="work-box col-11 col-md-5">

                    <div className="mini-box col-11 mt-3 pin">۱ - ثبت نام در سرورپارس</div>
                    <p className='mt-2'>در قدم اول بايد در سرورپارس عضو شويد، در صورت عضويت نيازی به ثبت نام مجدد نيست. سرورپارس بنرهای مختلفی ارائه می كند كه برای كسب درآمد بايد از اين بنرها استفاده كنيد.</p>

                    <div className="work-btn mt-3 mb-4">
                        ثبت نام
                    </div>

                </div>


                <div className="work-box col-11 col-md-5">

                    <div className="mini-box col-11 mt-3 pin2">۲ - دریافت کد</div>
                    <p className='mt-2'>بعد از ثبت نام در سايت و فعال كردن اكانت كسب درآمد خود، يكي از بنرهايی كه دريافت كرده ايد را در قسمت مناسبی از سايت خود درج كنيد تا بازديد كنندگان شما اين بنر را مشاهده و  كليك كنند.</p>

                    <div className="work-btn2 mt-3 mb-4">
                        فعال سازی حساب
                    </div>

                </div>



                <div className="work-box col-11 col-md-5 mb-3 mt-5">

                    <div className="mini-box col-11 mt-3 pin3">۳ - بازدیدکنندگان سایت شما</div>
                    <p className='mt-2'>بازديد كنندگان سايت شما، با كليک روی اين بنرها، وارد سايت سرورپارس شده و اقدام به خريد يكی از سرويس های اين شركت (دامنه، هاست، سرور، گواهينامه امنيتی و غيره) می كنند.</p>



                </div>


                <div className="work-box col-11 col-md-5 mb-3 mt-5">

                    <div className="mini-box col-11 mt-3 pin3">۴ - کسب درآمد از سرورپارس</div>
                    <p className='mt-2'>در اين مرحله، سيستم به صورت خودكار تمامي هزينه ها و درآمد شما را محاسبه
                        می كند. می توانيد درآمد خود را به صوت نقد دريافت كرده و يا برای خريد سرويس ها از آن استفاده كنيد.</p>



                </div>



            </div>
        </div>



    )
}

export default Work