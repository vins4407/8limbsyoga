import LOGO from "../../../assets/mainassets/8limbsyogalogo.png";
import { FaLinkedin } from "react-icons/fa";
import { CiMail, CiInstagram } from "react-icons/ci";


const Footer = () => {
    
  return (
    <div
      id="footer"
      className="bg-black  bg-opacity-20 backdrop-filter backdrop-blur-lg pt-12 flex flex-col gap-6"
    >
      <div className=" xl:mx-52 xl:mb-4 flex flex-col md:flex-row justify-center md:justify-around  items-center ">
        <img src={LOGO} className=" w-32 my-4" />
        <div className="flex flex-col text-xl font-medium text-center md:text-left   text-black gap-3">
          <h1 className=" font-semibold">About</h1>
          <a
            className=" font-light"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Previous Events
          </a>
          <a className=" font-light ">Upcoming Events</a>
          <a className=" font-light" href="" >Join Us</a>
        
        </div>
        <div className="flex flex-col text-xl font-medium text-center md:text-left  text-black gap-3 my-4">
          <h1 className=" font-semibold">Explore</h1>
          <a
            rel="noreferrer"
            href="/"
            className="font-light"
            target="_blank"
          >
            100 Hours Yoga Teacher Training
          </a>
          <a
            rel="noreferrer"
            href="/"
            className=" font-light"
            target="_blank"
          >
            200 Hours Yoga Teacher Training
          </a>
          <a
            rel="noreferrer"
            href="/"
            className=" font-light"
            target="_blank"
          >
               50 Hours Aerial Yoga Training

          </a>

        </div>
        <div className="flex flex-row justify-evenly text-3xl md:place-self-end gap-4 my-4">
          <a href="">
            <CiMail color="white" />
          </a>
          <a
            rel="noreferrer"
            href=""
            target="_blank"
          >
          </a>
          <a
            rel="noreferrer"
            href=""
            target="_blank"
          >
            <CiInstagram color="white" />
          </a>
          <a
            rel="noreferrer"
            href=""
            target="_blank"
          >
            <FaLinkedin color="white" />
          </a>
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
