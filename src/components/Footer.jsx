import { Component } from "react";
import "./Style/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="box-container">
          <div class="box">
            <h3>branch locations</h3>
            <a href=" ">egypt</a>
            <a href=" ">palestine</a>
            <a href=" ">KSA</a>
            <a href=" ">tunisia</a>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#course">course</a>
            <a href="#teachers">teachers</a>
            <a href="#contact">contact</a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <p>menofia, egypt.</p>
            <p>example@gmail.com</p>
            <p>+123-456-7890</p>
          </div>
        </div>

        <h1 class="credit">
          created by <a href=" ">FCI web designers</a> all rights reserved.
        </h1>
      </div>
    );
  }
}

export default Footer;
