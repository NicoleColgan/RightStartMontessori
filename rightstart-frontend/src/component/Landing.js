import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <div>
      {/* Header for the webpage */}
      <div class="headerContainer">
        <img src="/header.jpeg" class="headerImage"></img>
        <div class="ribbon">
          <nav class="navbar">
            <img src="/writingOfLogo.png" class="writingOfLogo"></img>
            <img src="/houseOfLogo.png" class="houseOfLogo"></img>
            <p
              style={{
                position: "absolute",
                transform: "translate(200px, -60px)",
              }}
            >
              Nav bar items to go here ...
            </p>
          </nav>
        </div>
        <h1 class="welcomeText">Right Start Montessori</h1>
        <p class="motto">because your child deserves the right start in life</p>
      </div>

      {/* About section */}
      <div class="about">
        <h2 class="aboutHeader">About Us</h2>
        <div class="aboutContent">
          <div class="aboutImagesArea">
            <img src="about1.jpg" class="about1Image"></img>
            <img src="about2.jpg" class="about2Image"></img>
          </div>
          <div class="aboutTextArea">
            <p class="aboutText">
              At Right Start Montessori we have been providing a homely, warm,
              and safe environment for over 14 years in our privately owned
              setting in Curraghmore, Kiltoom, Athlone.
              <br></br>
              <br></br>To ensure high quality standards we follow the Montessori
              philosophy on education along with the Aistear and Siolta
              Frameworks. Using both approaches assists us with supporting the
              overall holistic development of each child which empowers them to
              actively pursue their own learning.
              <br></br>
              <br></br>We also understand the importance of children connecting
              with nature and incorporate outdoor play and work within our
              curriculum to allow children experience this exciting environment
              and all it offers.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision section */}
      <div class="missionVision">
        <div class="missionVisionContent">
          <br></br>
          <div class="missionVisionEachSection">
            <h2 class="missionVisionHeader">Our Mission</h2>
            <p class="aboutText">
              At Right Start Montessori we have been providing a homely, warm,
              and safe environment for over 14 years in our privately owned
              setting in Curraghmore, Kiltoom, Athlone. To ensure high quality
              standards we follow the Montessori philosophy on education along
              with the Aistear and Siolta Frameworks. Using both approaches
              assist us with supporting the overall holistic development of each
              child which empowers them to actively pursue their own learning.
              We also understand the importance of children connecting with
              nature and incorporate outdoor play and work within our curriculum
              to allow children experience this exciting environment and all it
              offers.
            </p>
            <br></br>
          </div>

          <div class="missionVisionEachSection">
            <h2 class="missionVisionHeader" style={{marginTop: "-30px"}}>Our Vision</h2>
            <p class="aboutText">
              At Right Start Montessori we have been providing a homely, warm,
              and safe environment for over 14 years in our privately owned
              setting in Curraghmore, Kiltoom, Athlone. To ensure high quality
              standards we follow the Montessori philosophy on education along
              with the Aistear and Siolta Frameworks. Using both approaches
              assist us with supporting the overall holistic development of each
              child which empowers them to actively pursue their own learning.
              We also understand the importance of children connecting with
              nature and incorporate outdoor play and work within our curriculum
              to allow children experience this exciting environment and all it
              offers.
            </p>
            <br></br>
          </div>
        </div>
      </div>

      {/* our services, staff, subsidies, and fees */}
      <div class="ssfoptionSection">
        {/* i think i will have to do a vertical flex column for each picture and button and then a flex horizontal column for each pair */}
        <div class="flipContainer">
          <div class="flipper">

            <div class="front">
              <div class="ssfPanels">
                <img src="about1.jpg" class="ssfPanelImage"></img>
                <button class="ssfPanelButton">Our Services</button>
              </div>
            </div>

            <div class="back">
              <div class="cardContent">
                <p>We open from 8am to 6pm and offer Full Day Care, Pre-School/Montessori, and Afterschool Care.  
                  <br></br><br></br>Within our Morning Sessions, we offer part time care where parents can avail of their children staying on till 2 p.m. to coincide with the pick up of other siblings from our local schools.  Likewise with afterschool children, we can offer part time services where children can be dropped in the morning for breakfast and are transported by ourselves to school.  
                  <br></br><br></br>We also offer pickups from local schools for our afterschool children. 
                  <br></br><br></br>We have a fully approved Kitchen where we offer hot, nutritional meals and snacks onsite.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flipContainer">
          <div class="flipper">

            <div class="front">
              <div class="ssfPanels">
                <img src="about1.jpg" class="ssfPanelImage"></img>
                <button class="ssfPanelButton">Our Staff</button>
              </div>
            </div>

            <div class="back">
              <div class="cardContent">
                <p>We value our staff, their individuality, and experiences they bring to our setting.  All our staff are suitable and highly qualified in their areas and are passionate about caring for the children in their care. 
                  <br></br><br></br>We understand the importance of family involvement and have an open-door policy,  welcoming any suggestions that ensures a positive experience for your child on their early years journey.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flipContainer">
          <div class="flipper">

            <div class="front">
              <div class="ssfPanels">
                <img src="about1.jpg" class="ssfPanelImage"></img>
                <button class="ssfPanelButton">Subsidies and Fees</button>
              </div>
              </div>

            <div class="back">
              <div class="cardContent">
                <p>Universal Subsidies are available to all children and families up to 15 years of age along with free ECCE morning sessions for eligible pre-school/Montessori children. 
                  <br></br><br></br>For full details see PDF 2023-2024 Right Start Montessori Fees or go to <a src="https://www.ncs.gov.ie/en/">https://www.ncs.gov.ie/en/</a>, type in Roscommon area and view Right Start Montessori fees.  
                  <br></br><br></br>Alternatively, you are welcome to make an appointment to discuss your childcare issues and fees.</p>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Enroll section */}
      <div class="enrollContainer">
        <div class="enrollPanel">
          <div class="enrollContent">
            <img src="Logo.JPG" class="enrollLogo"></img>
            <button class="enrollButton">Enroll Your Child Now</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="footer">
        <div class="footerBorder">
          <div class="footerSections">
            <div class="footerCol">
              <img src="Logo.JPG" class="footerImage"></img>
            </div>

            <div class="footerCol">
              <h2 class="navigationHeading">Navigation</h2>
              <ul class="navigationContent" style={{
                listStyle: "none"
              }}>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Our Vision</li>
                <li>Gallery</li>
                <li>Our Services</li>
                <li>Staff</li>
                <li>Subsidies & Fees</li>
                <li>Testimonials</li>
                <li>Enroll Now</li>
              </ul>
            </div>

            <div class="footerCol">
              <h2 class="navigationHeading">Contact Us</h2>
              <div class="socialSection">
                <img src="placeholder.png" class="icon locationIcon"></img>
                <p class="socialInfo">
                  Curraghmore, Kiltoom, Athlone, Co. Roscommon, Athlone, Ireland
                </p>
              </div>

              <div class="socialSection">
                <img src="phone-call.png" class="icon"></img>
                <p class="socialInfo">+353 863704370</p>
              </div>

              <div class="socialSection">
                <img src="email.png" class="icon"></img>
                <p class="socialInfo">marionmulkearncolgan@gmail.com</p>
              </div>

              <div class="socialSection">
                <img src="facebook.png" class="icon"></img>
                <p class="socialInfo">Right Start Montessori</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
