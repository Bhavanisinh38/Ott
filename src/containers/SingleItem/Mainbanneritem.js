import React from 'react';
import {Link} from "react-router-dom";

// Css Files
import '../../css/mainbanneritem.css';

export default function Mainbanneritem(props) {

    return(
        <>
            <Link to="/detail" className="mainbanneritem-link">
                <div className="mbi-video-img-bx">
                    {/* <img className="mbi-img" src={props.src} alt="Title Name" /> */}

                    <video className="mbi-video" poster={props.src}>
                        {/* <source src={props.srcvideo} type="video/mp4" /> */}
                    </video>
                </div>
                <div className="mbi-data-bx">
                    <img className="mbi-name-img" src={props.srcname} alt="Title Name"/>
                    <div className="mbi-name">{props.name}</div>
                    <div className="mbi-tags">{props.tags}</div>
                    <div className="mbi-desc">{props.desc}</div>
                    <div className="mbi-btns">
                        <div className="mbi-btn mbi-play-btn">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"/></svg>
                            <span>Play</span>
                        </div>
                        <div className="mbi-btn">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"/></svg>
                            <span>More Info</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}