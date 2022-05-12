/* eslint-disable no-undef */
import React from "react";
import { Component, Fragment } from "react/cjs/react.production.min";
import "./Style/homes.css";
import { NavLink } from "react-router-dom";

import image1 from "./Images/download.jfif";
import image2 from "./Images/download.jfif1.jfif";
import image3 from "./Images/download.jfif2.jfif";
import image4 from "./Images/download.jfif3.jfif";
import image5 from "./Images/download.png1.png";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <body>
          <head>
            <meta charset="UTF-8"></meta>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            ></meta>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
              rel="stylesheet"
            ></link>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            ></link>
            <link rel="stylesheet" href="./homes.css"></link>
          </head>

          <section class="home" id="home">
            <h1>education from home</h1>
            <p>
              Education courses explore the practice of teaching from both an
              applied and theoretical perspective. Subtopics include educational
              policy, education technology, K-12 education, and teacher training
            </p>

            <div class="shape"></div>
          </section>
          <div className="image-box">
            <div className="image-row">
              {this.image_box(image1)}
              {this.image_box(image2)}
              {this.image_box(image3)}
              {this.image_box(image4)}
              {this.image_box(image5)}
            </div>
          </div>
        </body>
      </Fragment>
    );
  }

  image_box(img) {
    return <img src={img} alt="" />;
  }
}

export function Header() {
  return (
    <header>
      <button
        onClick={() => {
          $(this).toggleClass("fa-times");
          $(".navbar").toggleClass("nav-toggle");
        }}
      >
        {" "}
        <div id="menu" class="fas fa-bars"></div>
      </button>
      <NavLink to="/" className="logo">
        <i className="fas fa-user-graduate">LOGO</i>
      </NavLink>
      <nav className="navbar">
        <ul>
          <NavLink to="/">
            <a className="active"> Home</a>
          </NavLink>
          <NavLink to="/about">
            <a> About</a>
          </NavLink>
          <NavLink to="/Courses">
            <a> Corses</a>
          </NavLink>
          <NavLink to="/Teacher">
            <a> Teacher</a>
          </NavLink>
          <NavLink to="/ContactUs">
            <a> ContactUS</a>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Home;
