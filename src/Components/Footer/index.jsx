import Logo from "../../img/Logo.jpg"

const Footer = () => {
    return(
      <footer className="bg-dark pad-30">
          <div className="row">
              <div className="col-md-3 col-sm-12">
                 <div className="mb-3">
                     <img src={Logo} 
                     alt="AchieversIt" />
                 </div>
                 <div style={{color:"lightgrey", justifyContent:'center',marginLeft:"25px"}}>
                     <p>
                     AchieversIT - provides a wide group of opportunities
					for freshers and Experienced candidate who can develop their skills and build their career
					opportunities across multiple Companies.
                     </p>
                 </div>
              </div>
              <div className="col-md-9">
                  <div className="row">
                      <hr style={{
                          color:"white",
                      }}/>
                      <div className="col-md-3 col-sm-6 mx-auto pad-20">
                              <h5 style={{fontWeight:"bold",color:"grey"}} className="mt-3 mb-4">COMPANY</h5>
                              <ul className="list-unstyled">
                                 <li style={{color:"white"}}>Home</li>
                                 <li style={{color:"white"}}>Placements</li>
                                 <li style={{color:"white"}}>Corporate</li>
                                 <li style={{color:"white"}}>Training</li>
                                 <li style={{color:"white"}}>Contact US</li>
                              </ul>
                      </div>
                      
                      <div className="col-md-4 col-sm-6 mx-auto pad-20">
                              <h5 style={{fontWeight:"bold",color:"grey"}} className="mt-3 mb-4">TRENDING</h5>
                              <ul className="list-unstyled">
                                 <li style={{color:"white"}}>UI Development Course</li>
                                 <li style={{color:"white"}}>Angular JS Course</li>
                                 <li style={{color:"white"}}>React JS Course</li>
                                 <li style={{color:"white"}}>Digital Marketing Course</li>
                                 <li style={{color:"white"}}>Python Course</li>
                              </ul>
                      </div>
                    
                      <div className="col-md-4 col-sm-12 pad-10">
                      <h5 style={{fontWeight:"bold",color:"grey"}} className="mt-3 mb-4">Info</h5>
                      <ul className="list-unstyled">
                                 <li style={{color:"white"}} className="d-flex">
                                     
                                     <span><i className="fa fa-map-marked-alt" style={{color:"white",padding:"10px"}}></i></span>
                                     <span style={{padding:"5px"}}>
                                         #63, 1
                                         <sup>st</sup>
                                          Floor 16
                                         <sup>th</sup>
                                          Main, 8
                                         <sup>th</sup>
                                         Cross,BTM 1
                                         <sup>st</sup>
                                         Stage, Banglore India- 560029
                                     </span>
                                 </li>
                                 <li style={{color:"white"}} className="d-flex">
                                     
                                     <span><i className="fa fa-phone-volume mr-5" style={{color:"white",padding:"10px"}}></i></span>
                                     <span style={{padding:"5px"}}> India : +91 8431-040-457</span>
                                 </li>
                                 <li style={{color:"white"}} className="d-flex">
                                     
                                     <span><i className="fa fa-envelope-open-text mr-5" style={{color:"white",padding:"10px"}}></i></span>
                                     <span style={{padding:"5px"}}> info@achieversit.com</span>
                                 </li>
                              </ul>
                      </div>
                      

                  </div>

              </div>

          </div>
          <hr style={{
                          color:"white",
                      }}/>
          <div className="col-md-12" style={{display:"flex", justifyContent:"center"}}>
              <ul style={{display:"flex",listStyle:"none"}}>
                  <li><a href="#"><i className="fab fa-facebook fa-2x" style={{color:"white",padding:"5px"}}></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in fa-2x" style={{color:"white",padding:"5px"}}></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter fa-2x" style={{color:"white",padding:"5px"}}></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest fa-2x" style={{color:"white",padding:"5px"}}></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube fa-2x" style={{color:"white",padding:"5px"}}></i></a></li>
              </ul>
          </div>
          <div style={{display:"flex",justifyContent:"center",color:"white"}}>
              <div>Copyright &#169; 2020 AchieversIT. All Rights Reserved</div>
          </div>
      </footer>
    )
}

export default Footer