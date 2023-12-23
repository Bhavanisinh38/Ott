import React from 'react';

// Slider Code
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

// Design File
import Mainbanneritem from '../SingleItem/Mainbanneritem';

// Images Common File
import * as Img from '../../components/Img';

export default function Mainbanner() {
  
    const Mainbannerslider = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      dots: true,
      fade: true,
    };

    return(
        <> 
        <section>
          <div className="container-lg cl-custom p-0">
            <Slider className="mainbannerslider" {...Mainbannerslider}>
                <Mainbanneritem src={Img.demobig_img1} srcvideo={Img.demo_video} srcname={Img.demoname_img1} name={"Bleeding Steel"} tags={"Gujarati | Romance, Comedy, Web Series"} desc={"Maulik and Meera's madness continues and we see them stepping out to juggle between themselves and the world."}/>
                <Mainbanneritem src={Img.demobig_img2} srcvideo={Img.demo_video} srcname={Img.demoname_img2} name={"Monster Hunt 2"} tags={"Gujarati | Romance, Comedy, Web Series"} desc={"Maulik and Meera's madness continues and we see them stepping out to juggle between themselves and the world."}/>
                <Mainbanneritem src={Img.demobig_img3} srcvideo={Img.demo_video} srcname={Img.demoname_img3} name={"Chennai Central"} tags={"Gujarati | Romance, Comedy, Web Series"} desc={"Maulik and Meera's madness continues and we see them stepping out to juggle between themselves and the world."}/>
                <Mainbanneritem src={Img.demobig_img4} srcvideo={Img.demo_video} srcname={Img.demoname_img4} name={"Do not disturb"} tags={"Gujarati | Romance, Comedy, Web Series"} desc={"Maulik and Meera's madness continues and we see them stepping out to juggle between themselves and the world."}/>
            </Slider>
          </div>
        </section>  
        </>
    )
}