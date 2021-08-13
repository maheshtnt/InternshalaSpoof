import logo from './new_internshala_logo.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import wfh from './work_from_home.svg';
import delhi_ncr from './delhi_ncr.svg';
import bangalore from './bangalore.svg';
import chennai from './chennai.svg';
import hyderabad from './hyderabad.svg';
import international from './international.svg';
import kolkata from './kolkata.svg';
import mumbai from './mumbai.svg';

import design from './design.svg';
import engineering from './engineering.svg';
import humanities from './humanities.svg';
import mba from './mba.svg';
import media from './media.svg';
import ngo from './ngo.svg';
import part_time from './part_time.svg';
import science from './science.svg';

import creative_writing from './creative_writing.svg';
import autocad from './autocad.svg';
import ethical_hacking from './ethical_hacking.svg';
import advanced_excel from './advanced_excel.svg';
import machine_learning from './machine_learning.svg';
import web_development from './web_development.svg';
import digital_marketing from './digital_marketing.svg';
import programming_with_python from './programming_with_python.svg';

import verified from './verified.svg';
import dream from './dream.svg';
import ctc from './ctc.svg';


import './App.css';

import React, { useState } from 'react';

import { IconContext } from "react-icons";
import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

function App() {
  
  const [arrowStateInt, setArrowStateInt] = useState(false);
  const [arrowStateTra, setArrowStateTra] = useState(false);
  const [arrowStateReg, setArrowStateReg] = useState(false);

  const photos = [
    {
      name:"Photo 1",
      url:"https://internshala.com/cached_uploads/banner-images/home/home_jobs-1920.png"
    },
    {
      name:"Photo 1",
      url:"https://internshala.com/cached_uploads/banner-images/home/independence_day_campaign-1920-6676cf.png"
    },
    {
      name:"Photo 1",
      url:"https://internshala.com/cached_uploads/banner-images/home/home_internships-1920.png"
    }
  ]

  function toggleHoverInt() {
    setArrowStateInt(!arrowStateInt);
  }
  function toggleHoverTra() {
    setArrowStateTra(!arrowStateTra);
  }
  function toggleHoverReg() {
    setArrowStateReg(!arrowStateReg);
  }

  const settings = {
    className: "slides",
    dots:true,
    arrows:false,
    centerMode: true,
    infinite: true,
    autoplay:true,
    lazyLoad: true,
    pauseOnHover: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500

  };

  return (
    <div className="App">
      <div className="header">
        <div className="navBarWrapper">
          <div className="navBar">
            <div className="logo">
              <img src={logo} alt="logo" width="112" height="30"></img>
            </div>
            <div className="navBarDivider"></div>
            <div className="navBarEnd">
              <div className="navBarContent" onMouseEnter={()=>toggleHoverInt()} onMouseLeave={()=>toggleHoverInt()}>
              <IconContext.Provider value={{ size: "20px", className: "global-class-name" }}>
                <div className="navBarContentInner">
                  Internships { arrowStateInt ? <RiArrowUpSFill /> : <RiArrowDownSFill /> }
                </div>
                </IconContext.Provider>
              </div>
              <IconContext.Provider value={{ size: "20px", className: "global-class-name" }}>
              <div className="navBarContent"  onMouseEnter={()=>toggleHoverTra()} onMouseLeave={()=>toggleHoverTra()}>
                <div className="navBarContentInner">
                  Online Trainings { arrowStateTra ? <RiArrowUpSFill /> : <RiArrowDownSFill /> }
                </div>
              </div>
              </IconContext.Provider>
              <div className="navBarContent">
                <div className="navBarContentInner">
                  Fresher Jobs
                </div>
              </div>
              <div className="navBarContent">
                <div className="navBarContentInner loginButton">
                  Login
                </div>
              </div>
              <div className="navBarContent">
              <IconContext.Provider value={{ size: "20px", className: "global-class-name" }}>
                <div className="navBarContentInner registerButton" onMouseEnter={()=>toggleHoverReg()} onMouseLeave={()=>toggleHoverReg()}>
                  <div>Register { arrowStateReg ? <RiArrowUpSFill /> : <RiArrowDownSFill /> }</div>
                </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="searchBar">
          <div className="searchBarWrapper">
          <div className="searchBarInput">
            <input type="text" placeholder="What are you looking for?" name="searchb" className="searchInput" width="500"></input>
          </div>
          <div className="searchButton">
          <IconContext.Provider value={{ color:"white",size: "30px", className: "global-class-name" }}>
            <div className="searchButtonInner"><BiSearch /></div>
            </IconContext.Provider>
          </div>
          </div>
        </div>
        <div className="banners">
            <Slider {...settings}>
              {photos.map((photo) => {
                return(
                  <div className="carouselCard">
                    <img width="100%" src={photo.url} className="carouselImg"/>
                  </div>
                )
              })}
            </Slider>
          <ul class="ul-dots" role="tablist"></ul>
        </div>
        <div className="max-width-container">
          <h2>Internships</h2>
          <p className="section_description">
             Apply to 10,000+ internships for free 
             <a className="internshipLink" href="/">View all internships <IoArrowForwardOutline /></a>
          </p>
          
          <div className="categories">
            <h4>Popular cities</h4>
            <div className="categoriesCards">
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="wfh" src={wfh}></img>
                  </div>
                  <div className="text">
                    Work from home
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="delhi" src={delhi_ncr}></img>
                  </div>
                  <div className="text">
                    Delhi/NCR
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="bangalore" src={bangalore}></img>
                  </div>
                  <div className="text">
                    Bangalore
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="mumbai" src={mumbai}></img>
                  </div>
                  <div className="text">
                    Mumbai
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="hyderabad" src={hyderabad}></img>
                  </div>
                  <div className="text">
                    Hyderabad
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="chennai" src={chennai}></img>
                  </div>
                  <div className="text">
                    Chennai
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="kolkata" src={kolkata}></img>
                  </div>
                  <div className="text">
                    Kolkata
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="international" src={international}></img>
                  </div>
                  <div className="text">
                    International
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="categories">
            <h4>Popular categories</h4>
            <div className="categoriesCards">
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="part_time" src={part_time}></img>
                  </div>
                  <div className="text">
                    Part-time
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="engineering" src={engineering}></img>
                  </div>
                  <div className="text">
                    Engineering
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="ngo" src={ngo}></img>
                  </div>
                  <div className="text">
                    NGO
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="mba" src={mba}></img>
                  </div>
                  <div className="text">
                    MBA
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="design" src={design}></img>
                  </div>
                  <div className="text">
                    Design
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="science" src={science}></img>
                  </div>
                  <div className="text">
                    Science
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="media" src={media}></img>
                  </div>
                  <div className="text">
                    Media
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="humanities" src={humanities}></img>
                  </div>
                  <div className="text">
                    Humanities
                  </div>
                </a>
              </div>
            </div>
          </div>

          <h2>Internshala Trainings</h2>
          <p className="section_description">
             Learn new-age skills on the go 
             <a className="internshipLink" href="/">View all trainings <IoArrowForwardOutline /></a>
          </p>
          
          <div className="categories">
            <div className="categoriesCards">
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="programming_with_python" src={programming_with_python}></img>
                  </div>
                  <div className="text">
                    Programming with Python
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="digital_marketing" src={digital_marketing}></img>
                  </div>
                  <div className="text">
                    Digital Marketing
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="web_development" src={web_development}></img>
                  </div>
                  <div className="text">
                    Web Development
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="machine_learning" src={machine_learning}></img>
                  </div>
                  <div className="text">
                    Machine Learning
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="advanced_excel" src={advanced_excel}></img>
                  </div>
                  <div className="text">
                    Advanced Excel
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="ethical_hacking" src={ethical_hacking}></img>
                  </div>
                  <div className="text">
                    Ethical Hacking
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="autocad" src={autocad}></img>
                  </div>
                  <div className="text">
                    AutoCAD
                  </div>
                </a>
              </div>
              <div>
                <a className="internshipCardTile" href="/">
                  <div class="img">
                    <img alt="creative_writing" src={creative_writing}></img>
                  </div>
                  <div className="text">
                    Creative Writing
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="endline">
            &amp; 52 more...
          </div>

          <h2>Fresher Jobs</h2>
          <p className="section_description">
             Premium fresher jobs on your fingertips
             <a className="internshipLink" href="/">View all jobs <IoArrowForwardOutline /></a>
          </p>
          
          <div className="categories">
            <div className="categoriesCards jobsCards">
              
              
              <div>
                <a className="jobCardTile" href="/">
                  <div class="img">
                    <img alt="ctc" src={ctc}></img>
                  </div>
                  <div className="jobtext">
                    Minimum CTC of 3 LPA
                  </div>
                </a>
              </div>
              <div>
                <a className="jobCardTile" href="/">
                  <div class="img">
                    <img alt="dream" src={dream}></img>
                  </div>
                  <div className="jobtext">
                    Dream companies
                  </div>
                </a>
              </div>
              <div>
                <a className="jobCardTile" href="/">
                  <div class="img">
                    <img alt="verified" src={verified}></img>
                  </div>
                  <div className="jobtext">
                    100% verified jobs
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer">
          <div className="footerContainer">
            <div className="footerContainerInner">
              <div className="footerContainerInner2">
                <div className="footerColumn">
                  <div className="footer-list">
                    <h5>Internships by places</h5>
                    <div className="footer-list-item">
                      <a href="/">Internship in India</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Internship in Delhi</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Internship in Bangalore</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Internship in Hyderabad</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Internship in Mumbai</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Internship in Chennai</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Internship in Gurgaon</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Internship in Kolkata</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Virtual internship</a>
                    </div>
                  </div>
                </div>

                <div className="footerColumn">
                  <div className="footer-list">
                    <h5>Internships by Stream</h5>
                    <div className="footer-list-item">
                      <a href="/">Computer Science Internship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Electronics Internship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Mechanical Internship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Civil Internship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Marketing Internship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Chemical Internship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Finance Internship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Summer Research Fellowship</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Campus Ambassador Program</a>
                    </div>
                  </div>
                </div>

                <div className="footerColumn">
                  <div className="footer-list">
                    <h5>Online Trainings</h5>
                    <div className="footer-list-item">
                      <a href="/">Programming with Python</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Digital Marketing</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Web Development</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Machine Learning</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Advanced Excel</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Ethical Hacking</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">AutoCAD</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Creative Writing</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Data Science</a>
                    </div>
                  </div>
                </div>

                <div className="footerColumn">
                  <div className="footer-list">
                    <h5>About Internshala</h5>
                    <div className="footer-list-item">
                      <a href="/">About Us</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">We're hiring</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Hire interns for your company</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Team Diary</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Blog</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Our Services</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Terms &amp; Conditions</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Privacy</a>
                    </div>
                    <div className="footer-list-item">
                      <a href="/">Contact Us</a>
                    </div>
                  </div>
                </div>
                </div>
                <div className="footer-bottom">
                  <a href="/">
                  <IconContext.Provider value={{ size: "20px", className: "global-class-name" }}>
                    <div className="footer-list-item" id="android-app-button">
                      <IoLogoGooglePlaystore /> Get Android App
                    </div>
                  </IconContext.Provider>
                  </a>
                  <IconContext.Provider value={{ size: "20px", className: "global-class-name" }}>
                  <div className="social-media-container"><FaInstagram /><FiTwitter /><AiOutlineYoutube /><FiLinkedin /></div>
                  </IconContext.Provider>
                </div>
                <br></br>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
