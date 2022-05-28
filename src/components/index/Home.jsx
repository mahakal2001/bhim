import React from 'react'
import "./home.css"
import profileImg from "./background.jpg";


const Home = () => {
  return (
    <div>
      {/* <!--Nav Bar start--> */}

      {/* <div className="navbar">
        <div className="navLogo col-2">
          <img src="./images/logo.png" alt="logo" />
        </div>

        <div className="navHeading col-4">
          <h1>BHIM CHARAN BHAKTA</h1>
        </div>

        <div className="navMenu col-6">
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
              <a className="navbar-brand" href="/"><span className='text_of'>BHIM</span>CHARAN<span className='text_ofF'>BHAKTA</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <a href="#" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">AboutMe</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skill">Skill</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#project">Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contract">Contract</a>
                  </li>
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </div>
      {/* <!--Nav Bar End-->


    <!--Profile start--> */}

      <div className="profile" style={{
        backgroundImage: 'url(' + profileImg + ')',
        backgroundSize: "cover",
        height: "65vh",
        color: "#f5f5f5"
      }}>

        <img className="top-icon" src="./images/weather-icon.png" alt="" />
        <div className="profile-describetion">
          <h1>I am a Computer Student <br /> & <br />Web Developer Begginer</h1> <br /> <br />
          <p>Hi  !! My name is Bhim Charan Bhakta. Welcome to my personal page that I've designed to showcase my skill and expertise that I've accumulated over the year.</p>
        </div>
        <img className="buttom-icon" src="./images/weather-icon.png" alt="" />
      </div>

      {/* <!--Profile End-->
    

    <!-- About me starts here --> */}

      <div className="about-me" id="about">
        <h2>ABOUT ME</h2>
        <hr className="dotted-hr" />
        <div className="aboutme-img">
          <img src="./images/photo.jpg" alt="" />
        </div>

        <div className="aboutme-descrivetion">
          <p className="pop-stylw">I like to call myself" a Computer Student & web devloper".</p>
          <p className="pop-stylw">In short, web developers build and maintain websites. Web developers often work for clients who are trying to get their product or service onto the web.</p>



          <hr className="aboutme-hr" />
          <p>Name: Bhim Charan Bhakta</p>


          <hr className="aboutme-hr" />
          <p>Address:  West Bengal,India</p>


          <div className="aboutme-hover">
            <hr className="aboutme-hr" />
            <p>Email: <a href="mailto:bhaktabhim2001@gmail.com" target="blank">bhaktabhim2001@gmail.com</a></p>


            <hr className="aboutme-hr" />
            <p>Phone: <a href="tel:+7602165626" target="blank">7602165626</a></p>


            <hr className="aboutme-hr" />
            <p>Website: <a href="https://mahakal2001.github.io/bg-cal/" target="blank">mahakal2001.github.io/</a></p>
            <hr className="aboutme-hr" />
          </div>




          <a target="blank" href="./images/Bhim_resume.pdf" download>
            <button className="cv-button">Download CV</button>
          </a>


        </div>
      </div>





      {/* <!-- About me End here -->



    <!-- Personal Expretion start here --> */}



      <div className="personal-expretion " id="skill" style={{
        backgroundColor: "#222",

      }}>
        <div className="projectHeading">
          <h1>WELCOME TO MY Personal Expretion PAGE</h1>
          <hr className="dotted-hrr" />
        </div>
        {/* <!-- work Expretion start --> */}

        <div className="work-pretion col-4">
          <div className="card">
            <div className="img-icon">
              <img src="./images/work.png" alt="" />
            </div>
            <br />



            <div className="title-h">
              <h1>Work Expretion</h1>
            </div>
            <br />


            <div className="descrive-work">

              *** NO Expretion ***
            </div>
          </div>
        </div>

        {/* <!-- work Expretion End --> */}


        {/* <!-- Education Expretion start --> */}

        <div className="education col-4">

          <div className="card">
            <div className="img-icon">
              <img src="./images/education.png" alt="" />
            </div>
            <br />



            <div className="title-h">
              <h1>Education Qualification</h1>
            </div>



            <div className="descrive-wor">
              <ol>
                <li className="h">
                  <strong className="strong">Madhyamik Bord: West Bengal Board of Secondary Education</strong><br />
                  01/01/2015 - 01/01/2017 <br />
                  Mallik Chak Amar Smriti Vidyapith (H.S) <br />
                  Nandakumar, West Bengal (India) <br />

                </li>
                <hr />

                <li>
                  <strong className="strong">H.S Bord: West Bengal State Council of Technical & Vocational Education and Skill Development</strong><br />
                  01/01/2017 - 01/01/2019 <br />
                  Bohich Beria High School <br />
                  Nandakumar, West Bengal (India) <br />

                </li>
                <hr />

                <li>
                  <strong className="strong">BCA Bord: Maulana Abul Kalam Azad University of Technology</strong><br />
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

        <div className="skill-infromation col-4">
          <div className="card">
            <div className="img-icon">
              <img src="./images/skill.png" alt="" />
            </div>
            <br />
            <div className="title-h">
              <h1>SKILL</h1>
            </div>
            <ul>
              <li className="html">C</li>
              <li className="css">JAVA</li>
              <li className="py">C++</li>
              <li className="js">JAVASCRIPT</li>
              <li className="java">EXPRESS JS</li>
              <li className="c">NODE JS</li>
              <li className="cplus">MONGO DB</li>
            </ul>
          </div>
        </div>

        {/* <!-- Skill Expretion End --> */}

      </div>
      {/* <!-- Personal Expretion End here -->}

       

      {/* Project page start */}

      <div className="projectMain">
        <div className="projectHeading">
          <h1>WELCOME TO MY PROJECT PAGE</h1>
          <hr className="dotted-hrr" />
        </div>
        {/* Item 1 */}
        <div className="wrapper">
          <div className="cardProject ">
            <img src="./images/mahadev.jpg" alt="" />
            <div className="info">
              <h1>Weather App</h1>
              <button><a href="https://mahakal2001.github.io/personal-website/">Demo</a></button>
              <button><a href="https://mahakal2001.github.io/personal-website/">Code</a></button>
            </div>

          </div>

          <div className="cardProject ">
            <img src="./images/mahadev.jpg" alt="" />
            <div className="info">
              <h1>Weather App</h1>
              <button><a href="https://mahakal2001.github.io/personal-website/">Demo</a></button>
              <button><a href="https://mahakal2001.github.io/personal-website/">Code</a></button>
            </div>

          </div>

          <div className="cardProject ">
            <img src="./images/mahadev.jpg" alt="" />
            <div className="info">
              <h1>Weather App</h1>
              <button><a href="https://mahakal2001.github.io/personal-website/">Demo</a></button>
              <button><a href="https://mahakal2001.github.io/personal-website/">Code</a></button>
            </div>

          </div>

          <div className="cardProject ">
            <img src="./images/mahadev.jpg" alt="" />
            <div className="info">
              <h1>Weather App</h1>
              <button><a href="https://mahakal2001.github.io/personal-website/">Demo</a></button>
              <button><a href="https://mahakal2001.github.io/personal-website/">Code</a></button>
            </div>

          </div>
        </div>
      </div>

      {/* Project page End */}




      {/* Achivement-contract Start here */}


      <div className="Achivement-contract" id="contract">


        <div className="achivement col-4">



          <h2>ACHIVEMENT</h2>
          <hr className="dotted-hr" />
          <br /><br />





          <p>1. Public bank Scholarship 10,000 Rupes , and Swami vivekanda Scholarship 18,000 Rupes in Higher Secondary Education</p>
          <br />

          <p>2. I am  a Computer Student in BCA Haldia(Global Institute of Science & Technology), passed by 2022,grade 9.2</p>

        </div>


        <div className="contrantMe col-4">


          <h2>CONTRACT ME</h2>
          <hr className="dotted-hr" />



          <form action="mailto:bhaktabhim2001@gmail.com" method="post" enctype="text/plain">

            <p><input type="text" placeholder="Your Name" name="Name" /></p>
            <p><input type="email" placeholder="Email Name" name="email" /></p>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button type="submit">SEND</button>
            <button type="reset">RESET</button>

          </form>



        </div>

        <div className="moreWay-contract col-4">

          <h2>More Way to Contract</h2>
          <hr className="dotted-hr" />

          <div className="media-buttons">
            <a target="blank" href="https://www.youtube.com/channel/UCVMKUJ3aE_cvpOFv90kM34g" className="request-callback"><img src="./images/youtube.png" alt="Youtube" /></a>
            <a target="blank" href="https://www.facebook.com/bhim_charan_bhakta/"><img src="./images/facebook.png" alt="Facebook" /></a>
            <a target="blank" href="https://www.instagram.com/bhim_charan_bhakta/"><img src="./images/instagram.png" alt="Instragram" /></a>
          </div>


          <div className="media-button">
            <a target="blank" href="https://www.linkedin.com/in/bhim-charan-bhakta-997496175/" className="request-callback"><img src="./images/linkedin-brands.svg" alt="LinkedIn" /></a>
            <a target="blank" href="https://github.com/mahakal2001"><img src="./images/github.png" alt="GitHub" /></a>
            <a target="blank" href="mailto:bhaktabhim2001@gmail.com"><img src="./images/gmail.png" alt="Gmail" /></a>
          </div>


        </div>


      </div>


      {/* <!-- Achivement-contract End here -->
    
    <!-- Footer start here --> */}


      <div className="footer">
        <div className="footer-menu col-4">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#contract">Contract</a>
        </div>

        <div className="mahadev col-4">
          <img src="./images/mahadev.jpg" alt="" />
        </div>

        <div className="footer-descrivetion col-4">
          <p>Created With 💝 By MahakaL</p>
        </div>

      </div>
    </div>
  )
}

export default Home


