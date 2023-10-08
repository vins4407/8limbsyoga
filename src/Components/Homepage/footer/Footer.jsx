import LOGO from "../../../assets/mainassets/8limbsyogalogo.png";
import { FaLinkedin } from "react-icons/fa";
import { CiMail, CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";


const Footer = () => {
  const iframeUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120496.31207160234!2d72.75662146062452!3d19.303674363612593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a93c876cf81b%3A0x173ce4b2f5c06b75!2s8%20Limbs%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1696495568999!5m2!1sen!2sin';

  return (
    <div id="footer" className="bg-[#f1ece0ff]  relative bg-opacity-20 backdrop-filter backdrop-blur-lg pt-12 flex flex-col gap-6">
        <div className='z-10 w-full h-10 absolute -top-7 bg-pageJoint  bg-repeat-x  bg-contain' />

        <div className="  flex flex-col xl:flex-row justify-center md:justify-around   ">
         
          {/* Logo social */}
          <div className=" flex flex-col items-center ">
            <img src={LOGO} className="  w-32 my-4" />

            <div className="flex flex-row justify-evenly text-3xl  gap-4 my-4">
              <a href="">
                <CiMail color="black" />
              </a>

              <a
                rel="noreferrer"
                href=""
                target="_blank"
              >
                <CiInstagram color="black" />
              </a>
              <a
                rel="noreferrer"
                href=""
                target="_blank"
              >
                <FaLinkedin color="black" />
              </a>
            </div>
          </div>

          {/* Explore links */}
          <div className="flex flex-col text-xl font-medium text-center xl:text-left  text-black   gap">
            <h1 className=" font-semibold">Explore</h1>
            <div class="">
              <span class="inline-block w-24 h-1 rounded-full bg-orange-500"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
              <span class="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
            </div>

            <div className="gap-2   text-base flex flex-col">
              <Link to="/100-hour-yoga-teacher-training">100 Hour Yoga Teacher Training</Link>
              <Link to="/200-hour-yoga-teacher-training">200 Hour Yoga Teacher Training</Link>
              <Link to="/200+50-hour-yoga+aerial-teacher-training">200 hours YTTC + 50 hours Aerial Yoga</Link>
              <Link to="/300-hour-yoga-teacher-training">300 Hours Yoga Teacher Training</Link>
              <Link to="/50-hours-aerial-yoga-teacher-training">50 Hours Aerial Yoga Teacher Training</Link>
              <Link to="/100-hour-aerial-yoga-teacher-training">100 Hours Aerial Yoga Teacher Training</Link>
              <Link to="/prenatal-and-postnatal-yoga-teacher-training">Prenatal and Postnatal Yoga Teacher Training</Link>
            </div>

          </div>

          {/* Contact Info */}
          <div className="flex flex-col text-xl font-medium text-center xl:text-left   text-black ">
            <h1 className=" font-semibold">Contact Info</h1>
            <div class="">
              <span class="inline-block w-24 h-1 rounded-full bg-orange-500"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
              <span class="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
            </div>
            <div className="gap-2 flex text-base flex-col">
              <a href="tel:+91 75586 60993">+91 75586 60993</a>
              <a href="mailto:richasingh1907@gmail.com>">richasingh1907@gmail.com</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms And Conditions</a>

            </div>

          </div>

          {/* Map location */}
          <div className="font-medium  flex flex-col  items-center">

            <div className=" flex items-center pb-3 gap-2">
              <a className="bg-orange-500 text-white  px-6 py-3 " href="https://maps.app.goo.gl/dg88jY5rQMhFhaFn9" target="_blanck">Get Directions</a>
              <div class=" items-center ">
                <span class="inline-block w-24 h-1 rounded-full bg-orange-500"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
                <span class="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
              </div>

            </div>
            <iframe
              src={iframeUrl}
              width="350"
              height="300"
              style={{ border: 0 }}
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        <div className="h-1 bg-white" />

        <span className="text-center mb-4 text-black  text-base sm:text-xl font-medium font-mono">
          Copyright @8limbsYogaStudio 2023
        </span>
    </div>
  );
};

export default Footer;
