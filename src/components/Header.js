import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../assets/cancel.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "../css/Header.css";
import Typed from "react-typed";
import Pdf from "../document/HeroCV.pdf"
import Twitter from "../images/twitter.png"
import LI from "../images/linkedin.png"
import GIT from "../images/git.png"
import Stack from "../images/stack_overflow.png"


const Header = () => {

  
  //mobile responsiveness

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //scroll into view

  const executeHome = () => {
    const id = document.getElementById("home");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executeAbout = () => {
    const id = document.getElementById("about");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executePortfolio = () => {
    const id = document.getElementById("portfolio");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executeBlog = () => {
    const id = document.getElementById("testimonial");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executeContact = () => {
    const id = document.getElementById("contact");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  //sticky navbar

  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 15) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    
    <div id="home">
      <div className="bg">
        <div className={header ? "header active" : "header"}>
          <a href="#About" className="logo" alt="logo" >
            <svg
              width="100"
              height="105"
              viewBox="0 0 100 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_19_2)">
                <path
                  d="M26.7096 15.92V21.4H15.2696V27.32H23.8296V32.64H15.2696V44H8.42959V15.92H26.7096Z"
                  fill="white"
                />
              </g>
              <path
                d="M26.7096 15.92H27.7096V14.92H26.7096V15.92ZM26.7096 21.4V22.4H27.7096V21.4H26.7096ZM15.2696 21.4V20.4H14.2696V21.4H15.2696ZM15.2696 27.32H14.2696V28.32H15.2696V27.32ZM23.8296 27.32H24.8296V26.32H23.8296V27.32ZM23.8296 32.64V33.64H24.8296V32.64H23.8296ZM15.2696 32.64V31.64H14.2696V32.64H15.2696ZM15.2696 44V45H16.2696V44H15.2696ZM8.42958 44H7.42959V45H8.42958V44ZM8.42958 15.92V14.92H7.42959V15.92H8.42958ZM25.7096 15.92V21.4H27.7096V15.92H25.7096ZM26.7096 20.4H15.2696V22.4H26.7096V20.4ZM14.2696 21.4V27.32H16.2696V21.4H14.2696ZM15.2696 28.32H23.8296V26.32H15.2696V28.32ZM22.8296 27.32V32.64H24.8296V27.32H22.8296ZM23.8296 31.64H15.2696V33.64H23.8296V31.64ZM14.2696 32.64V44H16.2696V32.64H14.2696ZM15.2696 43H8.42958V45H15.2696V43ZM9.42958 44V15.92H7.42959V44H9.42958ZM8.42958 16.92H26.7096V14.92H8.42958V16.92Z"
                fill="black"
              />
              <path
                d="M66.7112 31.5155L49.8578 53.9755L43.9915 50.458L50.9297 41.2117L41.8044 35.7401L34.8662 44.9864L28.9999 41.469L45.8533 19.009L51.7196 22.5265L45.1175 31.3249L54.2428 36.7965L60.8449 27.9981L66.7112 31.5155Z"
                fill="#E5E5E5"
              />
              <path
                d="M66.7112 31.5155L67.5688 32.0298L68.169 31.2299L67.3114 30.7157L66.7112 31.5155ZM49.8578 53.9755L49.2576 54.7753L50.1152 55.2896L50.7154 54.4897L49.8578 53.9755ZM43.9915 50.458L43.1339 49.9438L42.5337 50.7436L43.3913 51.2579L43.9915 50.458ZM50.9297 41.2117L51.7874 41.7259L52.3876 40.9261L51.5299 40.4118L50.9297 41.2117ZM41.8044 35.7401L42.4046 34.9402L41.547 34.426L40.9468 35.2259L41.8044 35.7401ZM34.8662 44.9864L34.266 45.7863L35.1236 46.3005L35.7238 45.5007L34.8662 44.9864ZM28.9999 41.469L28.1423 40.9547L27.5421 41.7546L28.3997 42.2688L28.9999 41.469ZM45.8533 19.009L46.4535 18.2092L45.5959 17.6949L44.9957 18.4948L45.8533 19.009ZM51.7196 22.5265L52.5772 23.0407L53.1774 22.2409L52.3198 21.7266L51.7196 22.5265ZM45.1175 31.3249L44.2598 30.8107L43.6596 31.6105L44.5173 32.1248L45.1175 31.3249ZM54.2428 36.7965L53.6426 37.5963L54.5002 38.1106L55.1004 37.3107L54.2428 36.7965ZM60.8449 27.9981L61.4451 27.1982L60.5875 26.684L59.9873 27.4838L60.8449 27.9981ZM65.8535 31.0013L49.0001 53.4612L50.7154 54.4897L67.5688 32.0298L65.8535 31.0013ZM50.458 53.1756L44.5917 49.6582L43.3913 51.2579L49.2576 54.7753L50.458 53.1756ZM44.8491 50.9723L51.7874 41.7259L50.0721 40.6974L43.1339 49.9438L44.8491 50.9723ZM51.5299 40.4118L42.4046 34.9402L41.2042 36.54L50.3295 42.0115L51.5299 40.4118ZM40.9468 35.2259L34.0086 44.4722L35.7238 45.5007L42.6621 36.2543L40.9468 35.2259ZM35.4664 44.1866L29.6001 40.6691L28.3997 42.2688L34.266 45.7863L35.4664 44.1866ZM29.8576 41.9832L46.711 19.5233L44.9957 18.4948L28.1423 40.9547L29.8576 41.9832ZM45.2531 19.8089L51.1194 23.3263L52.3198 21.7266L46.4535 18.2092L45.2531 19.8089ZM50.862 22.0122L44.2598 30.8107L45.9751 31.8391L52.5772 23.0407L50.862 22.0122ZM44.5173 32.1248L53.6426 37.5963L54.843 35.9966L45.7177 30.525L44.5173 32.1248ZM55.1004 37.3107L61.7025 28.5123L59.9873 27.4838L53.3851 36.2822L55.1004 37.3107ZM60.2447 28.7979L66.111 32.3154L67.3114 30.7157L61.4451 27.1982L60.2447 28.7979Z"
                fill="black"
              />
              <defs>
                <filter
                  id="filter0_i_19_2"
                  x="8.42957"
                  y="15.92"
                  width="18.28"
                  height="32.08"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_19_2"
                  />
                </filter>
              </defs>
            </svg>
          </a>

          <nav className="nav" >

            <ul className={click ? "nav-options active" : "nav-options"}>
              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeHome();
                }} 
              >
                <Link to="/"  style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeAbout();
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  About
                </Link>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executePortfolio();
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Portfolio
                </Link>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeBlog();
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Testimonial
                </Link>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeContact();
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>

       <div className="hero-section">
          <div className="hero-name">Hello, I'm Hero Momoh.</div>

          <div className="hero-desc">
            I am a Software Developer with over 7 years of experience.
          </div>

          <div className="changing-text">
            {" "}
            My Prowess Lies in Developing{" "}
            <span className="typing">
              <Typed
                strings={[
                  "Mobile Applications.",
                  "Desktop Applications.",
                  "Software Applications.",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop={true}
              />
            </span>
          </div>

          <div className="social-login" style={{textDecoration:"none" }}>

            <a href="https://www.linkedin.com/in/momoh-herodion-038185183" target="blank" className="social-lg" >
            <img className="social-lg2" src={LI} alt="LinkedIn"/>
            </a>

            <a href="http://twitter.com/herocodes_" target="blank" className="social-lg">
            <img className="social-lg2" src={Twitter} alt="Twitter"/>
            </a>

            <a href="https://stackoverflow.com/users/9373832/herocodes" target="blank" className="social-lg">
            <img className="social-lg2" src={Stack} alt="Stack Overflow"/>
            </a>

            <a href="http://github.com/herocodess " target="blank" className="social-lg">
              <img className="social-lg2" src={GIT} alt="Github"/>
            </a>
          </div>


          <div className="heroBtn">
            <a  href="#contact" className="heroBtn1">
              Hire Me
            </a>

            <a href={Pdf}  download target="blank" className="heroBtn2">
              Download CV
            </a>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Header;
