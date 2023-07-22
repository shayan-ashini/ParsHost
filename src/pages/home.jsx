
import Footer from './global/footer'
import Top from './home/top'
import Slider1 from './home/slider'
import Mid1 from './home/mid1'
import Mid2 from './home/mid2'
import Mid3 from './home/mid3'
import Service from './home/service'
import Slider2 from './home/slider2'





import '../pages/home.css'

const Home = () => {
    return (
        <>
            <div className="col-12 background">
                <Top/>
            </div>
            <Slider1/>
            <Mid1/>
            <Mid2/>
            <Mid3/>
            <Service/>
            <Slider2/>






            <Footer/>


        </>

    )
}


export default Home