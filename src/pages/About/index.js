import React from "react";
import image from '../../assets/AAG09457.JPG'
import './style.css'

const About = () => (
  <div className="container" >
  <div className="row">
  <div className="card mb-3 shadow">
    <div className="row no-gutters">
      <div className="col-md-2">
        <img id="profile" className="card-img p-2" src={image}  />
      </div>
      <div className="col-md-10">
        <h1 className="card-header">Alan Grosse</h1>
        <div className="card-body">
          <h5 className="card-title">Full Stack Developer</h5>
          <a href="https://github.com/aagrosse"><i
              className="fab fa-github fa-2x p-2 text-info"></i></a>
          <a href="https://www.linkedin.com/in/alan-grosse-89101312"><i
              className="fab fa-linkedin-in fa-2x p-2 text-info"></i></a>
        </div>
        <div className="card-body">
          <p className="card-text">
            Hello, I'm Alan. Full Stack Web Developer with background in graphic design and leveraging a degree in
            Architecture from The University of Georgia to create solutions that are both user friendly and elegant.
            Eager to use
            my skills in CSS, Javascript, and responsive web design earned through a certificate in Full Stack
            Development from the
            Georgia Institute of Technology. Known for being organized, collaberative, and a problem solver. Self
            taught in ladder logic and msSQL at
            the Georgia Aquarium and maintained and reprogramed equipment controls and PLC's. Eager to use my skills
            and unique perspective to
            create web elements that are functional and visually pleasing.
          </p>
        </div>
      </div>
    </div>
    
    <div className="card-footer text-muted">
      aagrosse@gmail.com
    </div>
  </div>


  
  <div className="div pl-3 mt-2">
    <h1 className="pb-3">Skill Sets</h1>
  </div>
  <div className="row">
    
    <div className="col-md-4 px-1">
      <div className="card border-primary mb-3">
       <div className="card-header">Front End</div> 
        <div className="card-body shadow">
          <h4 className="card-title ">Front End Skills <i className="fab fa-js text-info"></i> </h4>
          <ul>
            <li>JavaScript including ES6</li>
            <li>jQuery</li>
            <li>AJAX</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </div>
  
    <div className="col-md-4 px-1">
      <div className="card border-primary mb-3">
        <div className="card-header">Back End</div> 
        <div className="card-body shadow">
          <h4 className="card-title">Back End Skills <i className="fab fa-react text-info"></i></h4>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>JSON</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
    </div>
    

  
    <div className="col-md-4 px-1">
      <div className="card border-primary mb-3">
         <div className="card-header">Tools</div>
        <div className="card-body shadow">
          <h4 className="card-title">Tools & Methodologies <i className="fas fa-toolbox text-info"></i></h4>
          <ul>
            <li>GitHub</li>
            <li>Agile</li>
          </ul>
        </div>
      </div>
    </div>
  
    <div className="col-md-12 px-1">
      <div className="card border-primary mb-3">
        <div className="card-header">Credentials</div>
        <div className="card-body shadow">
          <h4 className="card-title">Certifications & Other Useful Skills <i className="fas fa-award text-info"></i></h4>
          <ul>

            <li>Full Stack Flex Bootcamp, Georgia Institute of Technology</li>
            <li>BA Landscape Architecture, University of Georgia</li>
            <br></br>
            <li>Photography</li>
            <li>Graphic Design</li>
            <li>Adobe (Photoshop/Lightroom/Dreamweaver/Illustrator)</li>
            <li>Digital Drafting (AutoCAD/Revit/Sketchup)</li>

          </ul>
        </div>
      </div>
    </div>
    
  </div>
</div>
</div>
);

export default About;
