import React, { Component } from 'react';
import {Formik , Field} from "formik";

class Form extends Component {
  
  onSubmit = (values) => {
    console.log(values);
  }

  form = (props) => {
    return <form onSubmit={props.handleSubmit}>
      <label>email</label><br />
      <Field name="email" /><br />
      <label>password</label><br />
      <Field name="password" /><br />
      <a href='#home'><button type="submit">Send</button></a>
    </form>
  }

  render() {
    return (
      <div className="App">
        
        <Formik 
          initialValues={{name: "", email: ""}}
          onSubmit={this.onSubmit}
          render={this.form}
          />
        
      </div>
    
    );
  }
}

export default Form;