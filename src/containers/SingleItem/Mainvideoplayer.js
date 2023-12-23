import React from 'react';

// Css Files
import '../../css/mainvideoplayer.css';

export default function Mainvideoplayer({mainvideosrc, mainposter}) {


  return (
    <>
      <div className="container-lg cl-custom p-0">
        <div className="mainvideoplayer">

            <div className="backbtn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" color="#F2F1F3" width="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
              <span>Back</span>
            </div>

            <video poster={mainposter} className="main-video" autoPlay preload="true" muted controls disablePictureInPicture controlsList="nopictureinpicture nodownload noremoteplayback noplaybackrate" >
              <source src={mainvideosrc} type="video/mp4" />
            </video>
        </div>
      </div>
    </>
  );
}
