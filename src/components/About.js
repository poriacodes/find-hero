import React, { Component, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import expImg from "../images/award.png";
import userImg from "../images/users.png";
import projectImg from "../images/folder.png";
import whiteMark from "../images/white_mark.png";
import aquaMark from "../images/aqua_mark.png";
import "aos/dist/aos.css"
import Aos from 'aos'

const About = () => {

  
  useEffect(() =>{
    Aos.init({duration: 1500,
    anchorPlacement:'top-top'
    });
    

  }, {});

  return (

    <section data-aos="fade-up" id="about">

      <div className="container about_container">
        <div className="about_me">
          <div className="skill">
            <h6 className="mySkills"> My Skills</h6>

            <div className="container experience_container">
              <div className="experience_frontend">
                <div className="mobileDev">Mobile</div>{" "}
                <div className="mobileDev2">Development</div>
                <div className="experience_content">
                  <article className="experience_details">
                    <img  src={whiteMark} alt="Github" />
                    <h4>FLUTTER</h4>
                  </article>

                  <article className="experience_details">
                    <img  src={aquaMark} alt="Github" />
                    <h4>JAVA</h4>
                  </article>

                  <article className="experience_details">
                    <img  src={whiteMark} alt="Github" />
                    <h4>SWIFT</h4>
                  </article>
                </div>
              </div>

              <div className="experience_backend">
                <div className="mobileDev">Backend</div>{" "}
                <div className="mobileDev2">Development</div>
                <article className="experience_details">
                  <img  src={aquaMark} alt="Github" />
                  <h4>NodeJs</h4>
                </article>
                <article className="experience_details">
                  <img  src={whiteMark} alt="Github" />
                  <h4>NestJs</h4>
                </article>

                <div className="mobileDev1">Frontend</div>
                <div className="mobileDev2">Development</div>

                <article className="experience_details">
                  <img  src={aquaMark} alt="Github" />
                  <h4>VueJs</h4>
                </article>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="about_content">
          <h6 className="myExperience"> My Experience </h6>

          <div className="about_cards">
            <article className="about_card">
              <img className="about_icon" src={expImg} alt="Github" />
              <h5> Experience </h5>
              <small> 3+ Years Working Experience</small>
            </article>

            <article className="about_card">
              <img className="about_icon" src={userImg} alt="Github" />
              <h5> Clients </h5>
              <small> 50+ Clients Worldwide </small>
            </article>

            <article className="about_card">
              <img className="about_icon" src={projectImg} alt="Github" />
              <h5> Projects </h5>
              <small> 30+ Completed Projects</small>
            </article>
          </div>

          <p >
            Ready to build the next revolutionary App/Website?
          </p>

          <a href="#contact" className="about_btn" style={{textDecoration:"none" }}>
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
