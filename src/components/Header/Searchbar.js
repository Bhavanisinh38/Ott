
import React from 'react';
import {Link} from "react-router-dom";

// Images
import webshows from '../../img/category/web-shows.png';
import movies from '../../img/category/movies.png';
import livetv from '../../img/category/live-tv.png';
import shorts from '../../img/category/shorts.png';

// Css File
import '../../css/searchbar.css'

// Design Files
import { useSearchbar } from './MenuContext';

export default function Searchbar() {

    const { isSearchbar, toggleSearchbar } = useSearchbar();

    const Sciitem = [
        {
            sciName: "Web Shows",
            sciImg: webshows,
            sciLink: "/category",
        },
        {
            sciName: "Movies",
            sciImg: movies,
            sciLink: "/category",
        },
        {
            sciName: "Shorts",
            sciImg: shorts,
            sciLink: "/category",
        },
        {
            sciName: "Live Tv",
            sciImg: livetv,
            sciLink: "/category",
        },
    ]
    
    return (
        <>
            <section className={`searchbar-main-bx ${isSearchbar ? 'active' : ''}`}>

                <span className="close-icon" onClick={toggleSearchbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                </span>

                <div className="searchbar-inner">

                    <div className="signinup-group sgri sgli searchbar-group">

                        <input type="text" placeholder="Search for a Web Shows, Movie & Genre etc"/>

                        <span className="searchbar_icon searchbar_left_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </span>

                        <span className="searchbar_icon searchbar_right_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                            </svg>
                        </span>

                    </div>

                    <div className="searchbar-tags" onClick={toggleSearchbar}>
                        <Link to="/search">marvelous milly hindi</Link>
                        <Link to="/search">marvellous milly</Link>
                        <Link to="/search">marvel gujarati</Link>
                        <Link to="/search">marvels of mother nature</Link>
                    </div>

                    <div className="row my-4" onClick={toggleSearchbar}>

                        {Sciitem.map((item, index) => ( 
                        <div key={index} className="col-md-3 col-6">
                            <Link to={item.sciLink} className="searchbar-category-item">
                                <img src={item.sciImg} alt={item.sciName} />
                                <div className="sci-text">{item.sciName}</div>
                            </Link>
                        </div>
                        ))}

                    </div>

                </div>

            </section>
        </>
    );
};