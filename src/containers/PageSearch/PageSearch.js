import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";


// Css Files
import '../../css/search.css'

// Design Files
import Card from '../SingleItem/Cardtem';

// Images Common File
import * as Img from '../../components/Img';

export default function Search() {
    const [isFilter, setIsFilter] = useState(false);
    const [isSort, setIsSort] = useState(false);

    const toggleFilter = () => {
        setIsFilter(!isFilter)
    }

    const handleSort = () => {
        setIsSort(true);
    };

    const closeSort = () => {
        setIsSort(false);
    };

    const closeFilter = () => {
        setIsFilter(false);
    };

    return (
        <>
            <Helmet>
                <title>Search | Adstar</title>
            </Helmet>

            <div className="search-main-section">

                {/* Search Page Right Section or content Section */}
                <div className={`spage-right ${isFilter ? 'active' : ''} `}>
                    <div className="spage-r-top">
                        <div className="spage-r-lable">Movies <span className="showing-result">"419 results"</span></div>
                        <div className="spage-r-btn">
                            <div className={`sortfilterbtn ${isSort ? 'active' : ''}`} onClick={handleSort}><img src={Img.sort} alt="Sort Icon" />Sort By <span>Popular</span></div>
                            <div className={`sortfilterbtn ${isFilter ? 'active' : ''}`} onClick={toggleFilter}><img src={Img.filter} alt="Filter Icon" />
                                {isFilter ? ("Hide") : ("Show") } Filters
                            </div>
                        </div>
                    </div>

                    <div className="spage-r-list-row listitems-row">
                        
                        <div className="empty-div-bx">
                            <img className="empty-img" src={Img.empty} alt="Data is not available" />
                            <div className="empty-heading">No results 🥺</div>
                            <div className="empty-sub-heading">Try adjusting your filters to get more results.</div>
                            <Link to="/" className="empty-btn">Back to Home</Link>
                        </div>

                        <div className="card-outer-bx">
                        <Card src={Img.demo_img1}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img2}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img3}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img4}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img5}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img6}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img7}/>
                        </div>

                        <div className="card-outer-bx">
                        <Card src={Img.demo_img1}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img2}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img3}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img4}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img5}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img6}/>
                        </div>
                    
                        <div className="card-outer-bx">
                        <Card src={Img.demo_img7}/>
                        </div>
            
                    </div>

                    <div className="pagination-bx">
                        <div className="pagination-btn pb-left"><i className="fa fa-angle-left"></i></div>
                        <div className="pagination-text">Page 1 of 11</div>
                        <div className="pagination-btn pb-right"><i className="fa fa-angle-right"></i></div>
                    </div>
                </div>
                {/* Search Page Right Section or content Section */}

                {/* Search Page Left Section or Filter Section */}
                <aside className={`spage-left common-box-shadow ${isFilter ? 'active' : ''} `}>
                    <div className="sp-left-header">
                        <div className="slp-lable">Filters</div>
                        <span className="all-reset-btn active" id="reset-all-btn">Clear all</span>
                        <span className="close-icon" onClick={closeFilter}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                            </svg>
                        </span>
                    </div>
                    <div id="accordion" className="serach-filter-accordion"> {/* data-bs-parent="#accordion" */}
                    
                        <div className="acc-item">
                            <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapsevideotype" aria-expanded="true" aria-controls="collapsevideotype">Type<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                            <div id="collapsevideotype" className="collapse show" aria-labelledby="headingvideotype">
                                <div className="acc-detail">
                                    <div className="checkbox-group full-width-cb check-square">
                                        <input type="checkbox" id="vt-cb1"/>
                                        <label htmlFor="vt-cb1"><span className="check-icon"></span>Sci-Fi<span className="num-tag">02</span> </label>

                                        <input type="checkbox" id="vt-cb2"/>
                                        <label htmlFor="vt-cb2"><span className="check-icon"></span>Kids<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="vt-cb3"/>
                                        <label htmlFor="vt-cb3"><span className="check-icon"></span>Horror<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="vt-cb4"/>
                                        <label htmlFor="vt-cb4"><span className="check-icon"></span>Crime<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="vt-cb5"/>
                                        <label htmlFor="vt-cb5"><span className="check-icon"></span>Drama<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="vt-cb6"/>
                                        <label htmlFor="vt-cb6"><span className="check-icon"></span>Animation<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="vt-cb7"/>
                                        <label htmlFor="vt-cb7"><span className="check-icon"></span>Action<span className="num-tag">02</span></label>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="acc-item">
                            <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapselanguage" aria-expanded="true" aria-controls="collapselanguage">Language<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                            <div id="collapselanguage" className="collapse show" aria-labelledby="headinglanguage">
                                <div className="acc-detail">
                                    <div className="checkbox-group full-width-cb check-square">
                                        <input type="checkbox" id="language-cb1"/>
                                        <label htmlFor="language-cb1"><span className="check-icon"></span>Hindi<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="language-cb2"/>
                                        <label htmlFor="language-cb2"><span className="check-icon"></span>Gujrati<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="language-cb3"/>
                                        <label htmlFor="language-cb3"><span className="check-icon"></span>English<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="language-cb4"/>
                                        <label htmlFor="language-cb4"><span className="check-icon"></span>Bengali<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="language-cb5"/>
                                        <label htmlFor="language-cb5"><span className="check-icon"></span>Bhojpuri<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="language-cb6"/>
                                        <label htmlFor="language-cb6"><span className="check-icon"></span>Kannada<span className="num-tag">02</span></label>

                                        <input type="checkbox" id="language-cb7"/>
                                        <label htmlFor="language-cb7"><span className="check-icon"></span>Malayalam<span className="num-tag">02</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="acc-item">
                            <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapseactor" aria-expanded="true" aria-controls="collapseactor">Actor<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                            <div id="collapseactor" className="collapse show" aria-labelledby="headingactor">
                                <div className="acc-detail">
                                    <div className="checkbox-group full-width-cb check-square">
                                        <input type="checkbox" id="actor-cb1"/>
                                        <label htmlFor="actor-cb1"><span className="check-icon"></span>Amitabh Bachchan</label>

                                        <input type="checkbox" id="actor-cb2"/>
                                        <label htmlFor="actor-cb2"><span className="check-icon"></span>Amy Jackson</label>

                                        <input type="checkbox" id="actor-cb3"/>
                                        <label htmlFor="actor-cb3"><span className="check-icon"></span>Anupam Kher</label>

                                        <input type="checkbox" id="actor-cb4"/>
                                        <label htmlFor="actor-cb4"><span className="check-icon"></span>Anupama</label>

                                        <input type="checkbox" id="actor-cb5"/>
                                        <label htmlFor="actor-cb5"><span className="check-icon"></span>Anurag Kashyap</label>

                                        <input type="checkbox" id="actor-cb6"/>
                                        <label htmlFor="actor-cb6"><span className="check-icon"></span>Anushka</label>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="acc-item">
                            <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapseyear" aria-expanded="true" aria-controls="collapseyear">Release Year<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                            <div id="collapseyear" className="collapse show" aria-labelledby="headingyear">
                                <div className="acc-detail">
                                    <div className="checkbox-group cg-flex-row check-icon-hide check-square">
                                        <input type="checkbox" id="year-cb1"/>
                                        <label htmlFor="year-cb1"><span className="check-icon"></span>2018</label>

                                        <input type="checkbox" id="year-cb2"/>
                                        <label htmlFor="year-cb2"><span className="check-icon"></span>2019</label>

                                        <input type="checkbox" id="year-cb3"/>
                                        <label htmlFor="year-cb3"><span className="check-icon"></span>2020</label>

                                        <input type="checkbox" id="year-cb4"/>
                                        <label htmlFor="year-cb4"><span className="check-icon"></span>2021</label>

                                        <input type="checkbox" id="year-cb5"/>
                                        <label htmlFor="year-cb5"><span className="check-icon"></span>2022</label>

                                        <input type="checkbox" id="year-cb6"/>
                                        <label htmlFor="year-cb6"><span className="check-icon"></span>2023</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="sortfilter-footer">
                        <div className="sff-btn" onClick={closeFilter}>Apply Filters</div>
                    </div>
                </aside>
                {/* Search Page Left Section or Filter Section */}

            </div>

            {/* --- Sort By Filter Popup --- */}
            <div className={`sort-filter-popup ${isSort ? 'active' : ''} `}>
                <div className="common-box-shadow sort-filter-inner">
                    <span className="close-icon" onClick={closeSort}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                    </span>
                    <div className="sort-popup-lable">Sort By</div>
                    <div className="checkbox-group full-width-cb">
                        <input type="radio" id="sfp-cb1" name="sorffilters"/>
                        <label htmlFor="sfp-cb1"><span className="check-icon"></span>Popular</label>

                        <input type="radio" id="sfp-cb2" name="sorffilters"/>
                        <label htmlFor="sfp-cb2"><span className="check-icon"></span>Newest</label>

                        <input type="radio" id="sfp-cb3" name="sorffilters"/>
                        <label htmlFor="sfp-cb3"><span className="check-icon"></span>Oldest</label>
                    </div>
                    <div className="sortfilter-footer">
                        <div className="sff-btn" onClick={closeSort}>Apply Sorting</div>
                    </div>
                </div>
                
            </div>

            {/* --- Serach Page overlay div --- */}
            <div className={`serach-overlay ${isFilter ? 'filter-active' : ''} `} onClick={closeFilter}></div>
            <div className={`serach-overlay ${isSort ? 'active' : ''} `} onClick={closeSort}></div>
        </>
    )
}