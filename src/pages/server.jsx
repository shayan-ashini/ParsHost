
import Footer from './global/footer'

import Top from './server/top'

import Under from './server/under-head'

import Mid from './server/mid'

import '../pages/server/server.css'




const Server = () => {
    return (

        <>
            <div className="server-background col-12">

                <Top />

            </div>
            <Under/>
            <Mid/>
            <Footer />
        </>

    )
}


export default Server