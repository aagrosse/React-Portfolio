import React from "react";
import './style.css'

const Contact = () => (
  <div>
    <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <div class="stuff">
          <div class="primary">

            <h2>Get in Touch</h2><br></br>

            <form class="contact">

              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"></input>
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

              </div>
              <button type="submitbtn btn-primary" class="btn btn-warning">Submit Form</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </div>





    
  
);

export default Contact;
