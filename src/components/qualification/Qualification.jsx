import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id='portfolio'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>  Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Mass Communication and Journalism</h3>
                                <span className="qualification__subtitle">Rajshahi University</span>
                                <div className="qualification__calender">
                                    <i className="uil  uil-calendar-alt"></i> Jan 2022 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Journalism Communication and Media Studies</h3>
                                <span className="qualification__subtitle">Varendra University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2017 - Dec 2020
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Humanities (H.S.C) </h3>
                                <span className="qualification__subtitle">Agrani School And College, Rajshahi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> June 2012 - 2014
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">E-Commerce Coordinator</h3>
                                <span className="qualification__subtitle">Tech Rajshahi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> April 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Business Strategic Advisor</h3>
                                <span className="qualification__subtitle">Drutota Delivery Service</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May 2020 - Mar 2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Sub Editor</h3>
                                <span className="qualification__subtitle">Flash News 24</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Mar 2020 - Dec 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Trainer / Facilitators</h3>
                                <span className="qualification__subtitle">Dnet</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Mar 2019 - Mar 2020
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Information And Technology Department Head</h3>
                                <span className="qualification__subtitle">North Bengal Online</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Mar 2018 - Mar 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">System Engineer (Hardware And Software)</h3>
                                <span className="qualification__subtitle">Computer Service Center</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Feb 2016 - Feb 2017
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">System Engineer (Hardware And Software)</h3>
                                <span className="qualification__subtitle">SR Computer Showroom</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2015 - Jan 2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Information & Technology Department Head</h3>
                                <span className="qualification__subtitle">Chez Razzak Service</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2014 - Dec 2014
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;