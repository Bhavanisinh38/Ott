import React from 'react';
import { Helmet } from "react-helmet-async";



// Design Files
import Mainbanner from '../Sections/Mainbanner';
import Listitemslider from '../Sections/Listitemslider';
import Listitemslidertwo from '../Sections/Listitemslidertwo';


export default function PageHome() {
  return (
    <>
      <Helmet>
        <title>Adstar</title>
      </Helmet>

      {/* Main Banner */}
      <Mainbanner />

      {/* Top 10 This Week! */}
      <Listitemslider sectiontitle="Top 10 This Week!"/>

      {/* Top 10 This Week! */}
      <Listitemslidertwo sectiontitle="Continue Watching"/>

      {/* Original Web Shows */}
      <Listitemslider sectiontitle="Original Web Shows"/>

      {/* Trending Shows on Ott */}
      <Listitemslider sectiontitle="Trending Shows on Ott"/>
  
      {/* Shows You Can't Miss */}
      <Listitemslider sectiontitle="Shows You Can't Miss"/>  
  
      {/* Best in Gujarat */}
      <Listitemslider sectiontitle="Best in Gujarat"/>

      <div className="pt-5"></div>
      
    </>
  );
};
