import React from 'react';
import { Helmet } from "react-helmet-async";



// Design Files
import Mainbanner from '../Sliders/Mainbanner';
import Listitemslider from '../Sliders/Listitemslider';
import Listitemslidertwo from '../Sliders/Listitemslidertwo';


export default function PageHome() {

  const Sections = [
    { 
      ComponentHeading: "Top 10 This Week!", 
      ComponentName: Listitemslider,
    },
    { 
      ComponentHeading: "Continue Watching", 
      ComponentName: Listitemslidertwo,
    },

    { 
      ComponentHeading: "Original Web Shows", 
      ComponentName: Listitemslider,
    },

    { 
      ComponentHeading: "Trending Shows on Ott", 
      ComponentName: Listitemslider,
    },

    { 
      ComponentHeading: "Shows You Can't Miss", 
      ComponentName: Listitemslider,
    },

    { 
      ComponentHeading: "Best in Gujarat", 
      ComponentName: Listitemslider,
    },
  ];


  return (
    <>
      <Helmet>
        <title>Adstar</title>
      </Helmet>

      {/* Main Banner */}
      <Mainbanner />


      {Sections.map(({ ComponentName, ComponentHeading }, index) => (
        <ComponentName key={index} sectiontitle={ComponentHeading} />
      ))}

      {/* Top 10 This Week! */}
      {/* <Listitemslider sectiontitle="Top 10 This Week!"/> */}

      {/* Top 10 This Week! */}
      {/* <Listitemslidertwo sectiontitle="Continue Watching"/> */}

      {/* Original Web Shows */}
      {/* <Listitemslider sectiontitle="Original Web Shows"/> */}

      {/* Trending Shows on Ott */}
      {/* <Listitemslider sectiontitle="Trending Shows on Ott"/> */}
  
      {/* Shows You Can't Miss */}
      {/* <Listitemslider sectiontitle="Shows You Can't Miss"/>   */}
  
      {/* Best in Gujarat */}
      {/* <Listitemslider sectiontitle="Best in Gujarat"/> */}

      <div className="pt-5 pb-4"></div>
      
    </>
  );
};
