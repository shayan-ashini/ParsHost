
import Footer from './global/footer'
import Top from './host/top'
import Box from './host/box'
import Hostmid1 from './host/host-mid1'
import Hostp from './host/host-p'



const Host = () => {
    return (

        <>

            <div className="host-background col-12">

                    <Top/>
            </div>
            <Box/>
            <Hostmid1/>
            <Hostp/>
            <Footer/>
           
        </>

    )
}

export default Host