import "./Style/About.css";
import image1 from "./Images/Learning-bro.png";
import image2 from "./Images/404 error.png";
import serv_image from "./Images/Delivery-rafiki.png";

const { Component } = require("react");
class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="block">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              aperiam quaerat dolor voluptas nobis voluptates illum? Inventore
              voluptas dolore voluptates.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              delectus ducimus dignissimos pariatur. Amet sed distinctio earum
              dolorum nulla, in obcaecati aliquid modi quos magni ducimus culpa
              nobis laudantium incidunt.
            </p>
            <a href=" ">
              <button className="btn">learn more</button>
            </a>
          </div>
        </div>
        <div className="block">
          <h2 className="title">Our Team</h2>
          <div className="row">
            {this.team(
              "jhon",
              "dev",
              "some descrption",
              "hi@gmail.com",
              image2
            )}
            {this.team(
              "jhon",
              "dev",
              "some descrption",
              "hi@gmail.com",
              image2
            )}
            {this.team(
              "jhon",
              "dev",
              "some descrption",
              "hi@gmail.com",
              image2
            )}
            {this.team(
              "jhon",
              "dev",
              "some descrption",
              "hi@gmail.com",
              image2
            )}
            {this.team(
              "jhon",
              "dev",
              "some descrption",
              "hi@gmail.com",
              image2
            )}
          </div>
        </div>
        <div class="services" id="services">
          <div class="container">
            <h2 className="title">what we can do</h2>
            <div class="sevrices-content">
              <div class="col">
                {this.services(
                  "Graphic Design",
                  "Graphic design is the process of visual communication and problem-solving using one or more oftypography, photography and illustration."
                )}
                {this.services(
                  "UI & UX",
                  "Process of enhancing user satisfaction with a product by improving the usability, accessibility, andpleasure provided in the interaction."
                )}
              </div>
              <div class="col">
                {this.services(
                  "Web Design",
                  "Web design encompasses many different skills and disciplines in the production and maintenance ofwebsites."
                )}
                {this.services(
                  "Web Development",
                  "Web development is a broad term for the work involved in developing a web site for the Internet or anintranet."
                )}
              </div>
              <div class="col">
                <div class="image hide-image">
                  <img src={serv_image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  team(name, job, info, email, image) {
    return (
      <div className="column">
        <div className="card">
          <img src={image} alt="" />
          <div className="member-data">
            <h2>{name}</h2>
            <p className="job">{job}</p>
            <p>{info}</p>
            <p>{email}</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  services(srevName, servDescription) {
    return (
      <div class="serv">
        <div class="text">
          <h3>{srevName}</h3>
          <p>{servDescription}</p>
        </div>
      </div>
    );
  }
}

export default About;
