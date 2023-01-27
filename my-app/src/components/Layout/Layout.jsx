import React ,{Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Accordian from '../Accordian/Accordian';
import Routers from '../../routers/Routers';
import HeroSlider from '.././UI/HeroSlider';
import About from '.././About/About'
const Layout = ()=>{
    return <Fragment>
    <Header />
    <HeroSlider/>
    <About/>
    <Accordian />
        <div><Routers /></div>
        <Footer />
    </Fragment>
}
export default Layout;