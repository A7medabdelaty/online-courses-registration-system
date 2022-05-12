import React, { Component } from "react";
import "./Style/Courses.css";
import image1 from "./Images/course-1.svg";
import image2 from "./Images/course-2.svg";
import image3 from "./Images/course-3.svg";
import image4 from "./Images/course-4.svg";
import image5 from "./Images/course-5.svg";
import image6 from "./Images/course-6.svg";

class Courses extends Component {
  render() {
    return (
      <div className="cors" id="courses">
        {this.Header()}
        <div className="box-container">
          {this.cource(
            image1,
            "front-end development",
            "front-end development"
          )}
          {this.cource(
            image2,
            "teaching & training",
            "teaching & training"
          )}
          {this.cource(image3, "music & dance", "music & dance")}
          {this.cource(image4, "digital marketing", "digital marketing")}
          {this.cource(image5, "graphic design", "graphic design")}
          {this.cource(image6, "science & biology", "science & biology")}
        </div>
      </div>
    );
  }
  Header() {
    return (
      <div className="heading">
        <span>our top courses</span>
        <h3>popular courses</h3>
      </div>
    );
  }

  cource(image, title, content) {
    return (
      <div className="box">
        <div className="image">
          <img src= {image} alt="" />
          <h3>{title}</h3>
        </div>
        <div className="content">
          <h3>{content}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            deleniti!
          </p>
          <a href=" " className="btn">
            select course
          </a>
        </div>
      </div>
    );
  }
}

export default Courses;
