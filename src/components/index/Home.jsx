import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div>
      {/* <!--Nav Bar start--> */}

      {/* <div class="navbar">
        <div class="navLogo col-2">
          <img src="./images/logo.png" alt="logo" />
        </div>

        <div class="navHeading col-4">
          <h1>BHIM CHARAN BHAKTA</h1>
        </div>

        <div class="navMenu col-6">
          <a href="#">Home</a>
          <a href="#about-me-id">About</a>
          <a href="#skill-add">Skill</a>
          <a href="#contract-this">Contract</a>
        </div>

        
      </div> */}

      <div className=" bhim">
        <div className="row">
          <div className="col-md-12 col-12 mx-auto">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/"><span className='text_of'>GO</span>FooD</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <a href="/" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/cart">Cart</a>
                  </li>
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </div>
      {/* <!--Nav Bar End-->


    <!--Profile start--> */}

      <div class="profile">
        <img class="top-icon" src="./images/weather-icon.png" alt="" />
        <div class="profile-describetion">
          <h1>I am a Computer Student <br /> & <br />Web Developer Begginer</h1>
          <p>Hi  !! My name is Bhim Charan Bhakta. Welcome to my personal page that I've designed to showcase my skill and expertise that I've accumulated over the year.</p>
        </div>
        <img class="buttom-icon" src="./images/weather-icon.png" alt="" />
      </div>

      {/* <!--Profile End-->
    

    <!-- About me starts here --> */}

      <div class="about-me" id="about-me-id">
        <h2>ABOUT ME</h2>
        <hr class="dotted-hr" />
        <div class="aboutme-img">
          <img src="./images/photo.jpg" alt="" />
        </div>

        <div class="aboutme-descrivetion">
          <p class="pop-stylw">I like to call myself" a Computer Student & web devloper".</p>
          <p class="pop-stylw">In short, web developers build and maintain websites. Web developers often work for clients who are trying to get their product or service onto the web.</p>



          <hr class="aboutme-hr" />
          <p>Name: Bhim Charan Bhakta</p>


          <hr class="aboutme-hr" />
          <p>Address:  West Bengal,India</p>


          <div class="aboutme-hover">
            <hr class="aboutme-hr" />
            <p>Email: <a href="mailto:bhaktabhim2001@gmail.com" target="blank">bhaktabhim2001@gmail.com</a></p>


            <hr class="aboutme-hr" />
            <p>Phone: <a href="tel:+7602165626" target="blank">7602165626</a></p>


            <hr class="aboutme-hr" />
            <p>Website: <a href="https://mahakal2001.github.io/bg-cal/" target="blank">mahakal2001.github.io/</a></p>
            <hr class="aboutme-hr" />
          </div>




          <a target="blank" href="./images/Bhim_resume.pdf" download>
            <button class="cv-button">Download CV</button>
          </a>


        </div>
      </div>





      {/* <!-- About me End here -->



    <!-- Personal Expretion start here --> */}



      <div class="personal-expretion " id="skill-add">

        {/* <!-- work Expretion start --> */}

        <div class="work-pretion col-4">
          <div class="card">
            <div class="img-icon">
              <img src="./images/work.png" alt="" />
            </div>
            <br />



            <div class="title-h">
              <h1>Work Expretion</h1>
            </div>
            <br />


            <div class="descrive-work">

              *** NO Expretion ***
            </div>
          </div>
        </div>

        {/* <!-- work Expretion End --> */}


        {/* <!-- Education Expretion start --> */}

        <div class="education col-4">

          <div class="card">
            <div class="img-icon">
              <img src="./images/education.png" alt="" />
            </div>
            <br />



            <div class="title-h">
              <h1>Education Qualification</h1>
            </div>



            <div class="descrive-wor">
              <ol>
                <li class="h">
                  <strong class="strong">Madhyamik Bord: West Bengal Board of Secondary Education</strong><br />
                  01/01/2015 - 01/01/2017 <br />
                  Mallik Chak Amar Smriti Vidyapith (H.S) <br />
                  Nandakumar, West Bengal (India) <br />

                </li>
                <hr />

                <li>
                  <strong class="strong">H.S Bord: West Bengal State Council of Technical & Vocational Education and Skill Development</strong><br />
                  01/01/2017 - 01/01/2019 <br />
                  Bohich Beria High School <br />
                  Nandakumar, West Bengal (India) <br />

                </li>
                <hr />

                <li>
                  <strong class="strong">BCA Bord: Maulana Abul Kalam Azad University of Technology</strong><br />
                  01/01/2019 - 01/01/2022 <br />
                  Global Institute of Science and Technology - [GIST], East Medinipur <br />
                  Haldia, West Bengal (India) <br />

                </li>
                <hr />
              </ol>
            </div>
          </div>

        </div>

        {/* <!-- Education Expretion End -->

        <!-- Skill Expretion start --> */}

        <div class="skill-infromation col-4">
          <div class="card">
            <div class="img-icon">
              <img src="./images/skill.png" alt="" />
            </div>
            <br />
            <div class="title-h">
              <h1>SKILL</h1>
            </div>
            <ul>
              <li class="html">HTML</li>
              <li class="css">C</li>
              <li class="py">CSS</li>
              <li class="js">JAVA</li>
              <li class="java">C++</li>
              <li class="c">JAVASCRIPT</li>
              <li class="cplus">PYTHON</li>
            </ul>
          </div>
        </div>

        {/* <!-- Skill Expretion End --> */}

      </div>



      {/* <!-- Personal Expretion End here -->


    <!-- Achivement-contract Start here --> */}


      <div class="Achivement-contract" id="contract-this">


        <div class="achivement col-4">



          <h2>ACHIVEMENT</h2>
          <hr class="dotted-hr" />
          <br /><br />





          <p>1. Public bank Scholarship 10,000 Rupes , and Swami vivekanda Scholarship 18,000 Rupes in Higher Secondary Education</p>
          <br />

          <p>2. I am  a Computer Student in BCA Haldia(Global Institute of Science & Technology), passed by 2022,grade 9.2</p>

        </div>


        <div class="contrantMe col-4">


          <h2>CONTRACT ME</h2>
          <hr class="dotted-hr" />



          <form action="mailto:bhaktabhim2001@gmail.com" method="post" enctype="text/plain">

            <p><input type="text" placeholder="Your Name" name="Name" /></p>
            <p><input type="email" placeholder="Email Name" name="email" /></p>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button type="submit">SEND</button>
            <button type="reset">RESET</button>

          </form>



        </div>

        <div class="moreWay-contract col-4">

          <h2>More Way to Contract</h2>
          <hr class="dotted-hr" />

          <div class="media-buttons">
            <a target="blank" href="https://www.youtube.com/channel/UCVMKUJ3aE_cvpOFv90kM34g" class="request-callback"><img src="./images/youtube.png" alt="Youtube" /></a>
            <a target="blank" href="https://www.facebook.com/bhim_charan_bhakta/"><img src="./images/facebook.png" alt="Facebook" /></a>
            <a target="blank" href="https://www.instagram.com/bhim_charan_bhakta/"><img src="./images/instagram.png" alt="Instragram" /></a>
          </div>


          <div class="media-button">
            <a target="blank" href="https://www.linkedin.com/in/bhim-charan-bhakta-997496175/" class="request-callback"><img src="./images/linkedin-brands.svg" alt="LinkedIn" /></a>
            <a target="blank" href="https://github.com/mahakal2001"><img src="./images/github.png" alt="GitHub" /></a>
            <a target="blank" href="mailto:bhaktabhim2001@gmail.com"><img src="./images/gmail.png" alt="Gmail" /></a>
          </div>


        </div>


      </div>


      {/* <!-- Achivement-contract End here -->
    
    <!-- Footer start here --> */}


      <div class="footer">
        <div class="footer-menu col-6">
          <a href="#">Home</a>
          <a href="#about-me-id">About</a>
          <a href="#skill-add">Skill</a>
          <a href="#contract-this">Contract</a>
        </div>

        <div class="footer-descrivetion">
          <p>Created With 💝 By MahakaL</p>
        </div>

      </div>
    </div>
  )
}

export default Home

