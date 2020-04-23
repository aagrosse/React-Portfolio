import React from "react";
import img from '../../assets/AAG09457.JPG'
import './style.css'
import portf from '../../assets/AAG_Resume.pdf'

const Resume = () => (
  <div>
   <div className="container"> 
  <div className="div pl-3 mt-5">
    <h1>Online Resume</h1>
    <form method="get" action={portf} target="_new">
      <button className="btn btn-link btn-danger" type="submit"><i className="fas fa-file-pdf"></i> Download PDF
      Version</button>
    </form>
  </div>


  <div className="container px-3">
    <article className="resume-wrapper p-5 mb-5 my-1 shadow-lg">
      <div className="resume-header">
        <div className="row">
          <div className="resume-title col-md-8">
            <h2 className="resume-name mb-0 text-uppercase">Alan Grosse</h2>
            <div className="resume-tagline mb-3 mb-md-0">Full Stack Developer</div>
          </div>

          <div className="resume-contact col-md-4">
            <ul className="mb-0">
              <li className="mb-2"><i className="fas fa-phone-square fa-lg mr-2 "></i>407.408.0228</li>
              <li className="mb-2"><i className="fas fa-envelope-square fa-lg mr-2"></i>aagrosse@gmail.com</li>
              <li className="mb-2"><i className="fas fa-map-marker-alt fa-lg mr-2"></i>Atlanta, GA</li>
            </ul>
          </div>
        </div>

      </div>

      <hr />
      <div className="resume-intro py-3">
        <div className="div media flex-column flex-md-row">
          <img className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src={img} alt="Bio" />
          <div className="div media-body text-left">
            <p className="mb-0">Hello, I'm Alan.  Full Stack Web Developer with background in graphic design and leveraging a degree in
            Architecture from The University of Georgia to create solutions that are both user friendly and elegant.  Eager to use
            my skills in CSS, Javascript, and responsive web design earned through a certificate  in  Full Stack Development from the
            Georgia Institute of Technology.  Known for being organized, collaberative, and a problem solver.  Self taught in ladder logic and msSQL at
            the Georgia Aquarium and maintained and reprogramed equipment controls and PLC's.  Eager to use my skills and unique perspective to
            create web elements that are functional and visually pleasing.

          </p>
          </div>
        </div>
      </div>

      <hr />
      <div className="resume-body">
        <div className="row">
          
            <div className="resume-main col-12 col lg-8 col-xl-9 pr-0 pr-lg-5">
              <section className="work-section py-3">
                <h3 className="text-uppercase resume-section-heading"><i className="fas fa-code-branch text-danger pr-3"></i>Work Experience</h3>
                <div className="item mb-3">
                  <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Assistant Manager</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-8 text-muted text-left">Georgia Aquarium | 2009 - Present
                </div>

                  </div>
                  <div className="item-content">
                    <ul>
                      <li>
                        <span className="text-danger">***</span>Managed a team of 14 technicians that oversaw the MsSQL Database and scripting controllers
                    for the aquariums component automation for the filtration systems
                  </li>
                      <li>
                        <span className="text-danger">***</span>Troubleshot sensors, automation, and scripting when problems surfaced
                    </li>
                      <li>
                        <span className="text-danger">***</span>Reloaded and edited ladder logic for component PLC's
                    </li>
                      <li>
                        <span className="text-danger">***</span>Created construction documentation and provided construction administration
                      for new exhibits/ systems.
                    </li>

                    </ul>
                  </div>
                </div>


                <div className="item mb-3">
                  <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Consultant</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-8 text-muted text-left">Freelance Consulting |
                  2014 - Present</div>

                  </div>
                  <div className="item-content">
                    <ul>
                      <li>
                        <span className="text-danger">***</span>Created construction documentation and provided construction administration
                      for new exhibits/ systems for aquariums and zoos across the US.
                    </li>
                    </ul>
                  </div>
                </div>

                <div className="item mb-3">
                  <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Graphic Designer</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-8 text-muted text-left">Anofit, LLC | 2009 - 2013</div>

                  </div>
                  <div className="item-content">
                    <ul>
                      <li>
                        <span className="text-danger">***</span>Created logos and web elements for the web page of a downtown Atlanta wellness brand
                    </li>
                      <li>
                        <span className="text-danger">***</span>Created promotional and marketing materlial
                    </li>

                    </ul>
                  </div>
                </div>






              </section>

            </div>


            
              
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading"><i className="fas fa-cogs text-danger pr-3"></i> Skills</h3><br />
                  <div style={{display: 'flex', flexDirection: 'row', flexWrap:"wrap", justifyContent: "space-evenly"}}>
                  <div className="item p-5 mb-5 my-1" style={{padding: "20px"}}>
                    <h4 className="item-title"><span className="text-danger">Technical</span></h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">JavaScript/jQuery</li>
                      <li className="mb-2">React</li>
                      <li className="mb-2">Node.js</li>
                      <li className="mb-2">MySQL</li>
                      <li className="mb-2">Agile</li>
                      <li className="mb-2">MongoDB</li>
                      <li className="mb-2">HTML and CSS</li>
                    </ul>

                  </div>


                  <div className="item p-5 mb-5 my-1" style={{padding: "20px"}}>
                    <h4 className="item-title"><span className="text-danger">Professional</span></h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2"></li>
                      <li className="mb-2">Effective Communication</li>
                      <li className="mb-2">Goal Oriented</li>
                      <li className="mb-2">Team Player</li>
                      <li className="mb-2">Good Time Management</li>
                      <li className="mb-2">Strong Problem Solver</li>
                    </ul>

                  </div>


                  <div className="item p-5 mb-5 my-1"style={{padding: "40px"}}>
                    <h4 className="item-title"><span className="text-danger">Education</span></h4>

                    <ul className="list-unstyled resume-education-list">
                      <li className="mb-3">
                        <div className="resume-degree font-weight-bold">Full Stack Development Flex</div>
                        <div className="resume-degree-org text-muted">Georgia Institute of Technology, Atlanta, GA</div>
                      </li>
                    </ul>

                    <ul className="list-unstyled resume-education-list">
                      <li className="mb-3">
                        <div className="">BA Landscape Architecture</div>
                        <div className="resume-degree-org text-muted">University of Georgia, Athens, GA</div>
                      </li>
                    </ul>

                  </div>

                  </div>

                </section>
            
            
          </div>
        </div>

        <div className="resume-footer text-center">
          <ul className="list-inline mx-auto mb-0 d-inline-block text-muted">
            <li className="list-inline-item mb-lg-0 mr-3"><a href="https://github.com/aagrosse" rel="noopener noreferrer" target="_blank"><i
              className="fab fa-github fa-2x p-2 text-danger"></i></a>
            </li>
            <li className="list-inline-item mb-lg-0 mr-3"><a href="https://www.linkedin.com/in/alan-grosse-89101312"
              rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in fa-2x p-2 text-danger"></i></a></li>
          </ul>


        </div>


      
    </article>
    </div>
    </div>
    </div>

);

export default Resume;
