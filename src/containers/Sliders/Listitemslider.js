import React from 'react';
import {Link} from "react-router-dom";

// Slider Code
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

// Design Files
import Card from '../SingleItem/Cardtem';

// Images Common File
import * as Img from '../../components/Img';

export default function Listitemslider(props) {
  const Listitemslider = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          autoplay: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          autoplay: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          autoplay: false,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          autoplay: false,
        }
      }
    ]
  };
  return (
    <>
      <section className="pt-5">
          <div className="container-lg cl-custom cl-relative">
            <div className="section-heading">{props.sectiontitle}</div>
            <Slider className={`slick-hover Listitemslider mt-2`} {...Listitemslider}>
              <Card src={Img.demo_img8}/>
              <Card src={Img.demo_img1}/>
              <Card src={Img.demo_img2}/>
              <Card src={Img.demo_img3}/>
              <Card src={Img.demo_img4}/>
              <Card src={Img.demo_img5}/>
              <Card src={Img.demo_img6}/>
              <Card src={Img.demo_img7}/>
              <Card src={Img.demo_img8}/>
              <Card src={Img.demo_img1}/>
              <Card src={Img.demo_img2}/>
              <Card src={Img.demo_img3}/>
              <Card src={Img.demo_img4}/>
              <Card src={Img.demo_img5}/>
              <Card src={Img.demo_img6}/>
              <Card src={Img.demo_img7}/>
            </Slider>
            <Link to="/category" className="viewallbtn">View All<i className="fa fa-angle-right"></i></Link>
          </div>
      </section>
    </>
  );
}
