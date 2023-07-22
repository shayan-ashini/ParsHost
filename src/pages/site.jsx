


import Footer from './global/footer'
import Top from './site/top'

import Mid from './site/mid'

import '../pages/site/site.css'




const Host = () => {
    return (

        <>

            <div className="site-background col-12">
                <Top/>
                
            </div>
            <Mid/>

            <Footer/>
           
        </>

    )
}

export default Host