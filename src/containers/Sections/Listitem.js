import React from 'react';

// Design Files
import Card from '../SingleItem/Cardtem';

// Images Common File
import * as Img from '../../components/Img';

export default function Listitem(props) {

  return (
    <>
      <section className="pt-5">
          <div className="container-lg cl-custom cl-relative">
            <div className="section-heading">{props.sectiontitle}</div>
            <div className="listitems-row ci-two mt-2">
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img1}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img2}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img3}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img4}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img1}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img2}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img3}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img4}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img1}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img2}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img3}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demobig_img4}/>
              </div>

            </div>
          </div>
      </section>
    </>
  );
}
