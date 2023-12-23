import React from 'react';

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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          autoplay: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          autoplay: false,
        }
      },
      {
        breakpoint: 576,
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
            <Slider className={`slick-hover Listitemslider ci-two mt-2`} {...Listitemslider}>
              <Card src={Img.demobig_img1} cno="Seasons 1, Episodes 1"/>
              <Card src={Img.demobig_img2} cno="Seasons 1, Episodes 2"/>
              <Card src={Img.demobig_img3} cno="Seasons 1, Episodes 3"/>
              <Card src={Img.demobig_img4} cno="Seasons 1, Episodes 4"/>
              <Card src={Img.demobig_img1} cno="Seasons 2, Episodes 1"/>
              <Card src={Img.demobig_img2} cno="Seasons 2, Episodes 2"/>
              <Card src={Img.demobig_img3} cno="Seasons 2, Episodes 3"/>
              <Card src={Img.demobig_img4} cno="Seasons 2, Episodes 4"/>
              <Card src={Img.demobig_img1} cno="Romance, Hindi, 2019"/>
              <Card src={Img.demobig_img2} cno="Romance, Hindi, 2019"/>
              <Card src={Img.demobig_img3} cno="Romance, Hindi, 2019"/>
              <Card src={Img.demobig_img4} cno="Romance, Hindi, 2019"/>
            </Slider>
            <div className="viewallbtn">View All<i className="fa fa-angle-right"></i></div>
          </div>
      </section>
    </>
  );
}
