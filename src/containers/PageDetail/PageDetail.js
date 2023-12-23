import React from 'react';
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Images Common File
import * as Img from '../../components/Img';

// Design Files
import Mainvideoplayer from '../SingleItem/Mainvideoplayer';
import Listitemslidertwo from '../Sections/Listitemslidertwo';
import Listitem from '../Sections/Listitem';


export default function PageDetail() {
  return (
    <>
      {/* Main Video Player */}
      <Mainvideoplayer mainvideosrc={Img.demo_video} mainposter={Img.demobig_img1}/>
    
      <section className="pt-4">
        <div className="container-lg cl-custom">

            <div className="breadcrumb-bx">
                <Link className="breadcrumb-link" to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                <Link className="breadcrumb-link" to="/">Categories<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                <Link className="breadcrumb-link breadcrumb-active" to="/">Novoland: Eagle Flag (Hindi Dubbed)</Link>
            </div>

            <div className="detail-main-bx">
                <div className="dpb-data-name">Novoland: Eagle Flag (Hindi Dubbed)</div>
                <div className="dpb-data-se">Season 1 Episode 1</div>
                <div className="dpb-data-about">Teen heartthrob of ABC / MTV fame ✨ Actor & Singer || former member of boyband O-Town Broadway Star of HAIRSPRAY and WICKED the musical 🎭 Teen heartthrob of ABC / MTV fame ✨ Actor & Singer || former member of boyband O-Town Broadway Star of HAIRSPRAY and WICKED the musical 🎭 Teen heartthrob of ABC / MTV fame ✨ Actor & Singer || former member of boyband O-Town Broadway Star of HAIRSPRAY and WICKED the musical 🎭</div>
            </div>

        </div>
      </section>

      {/* Related Shows */}
      <Listitemslidertwo sectiontitle="Related Shows"/>

      {/* Related Shows */}
      <Listitem sectiontitle="Related Shows"/>


      <div className="pt-5"></div>
    </>
  );
};
