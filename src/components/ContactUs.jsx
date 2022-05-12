import "./Style/ContactUs.css";
const { Component } = require("react");

class ContactUs extends Component {
  render() {
    return (
      <section class="contact" id="contact">
        <h1 class="contact-title" id="contact-title">
          Contact Us
        </h1>
        <div class="contact-content">
          <div class="contact-box">
            <form action="">
              <input type="text" placeholder="Enter Your Full Name" />
              <input type="email" placeholder="Enter Your Email" />
              <input type="password" placeholder="Enter Your Password" />
              <input type="number" placeholder="Enter Your Number" />

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="contact-address"
                placeholder="Enter Your Address"
              ></textarea>
              <input type="submit" class="btn" value="Send Now" name="" id="" />
            </form>
          </div>
          <div class="contact-image"></div>
        </div>
      </section>
    );
  }
}

export default ContactUs;