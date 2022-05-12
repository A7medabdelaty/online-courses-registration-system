import { Component } from "react";
import "./Style/Teacher.css";

class Teacher extends Component {
  render() {
    return (
      <section class="teacher" id="teacher">
        <div className="content">
          <h1 class="heading">our expert teacher</h1>

          <p>
            The teacher is the foundation on which generations do not build
            knowledge, culture and respect, which must be required by his
            students as an example for them in life, and they should learn
            respect and knowledge from them, but education is before education.
          </p>

          <div>
            <a href=" ">
              <button class="btn">learn more</button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Teacher;
