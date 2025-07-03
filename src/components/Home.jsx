import React, { useState, useEffect } from "react";
import "../App.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image6 from "../assets/image6.png";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPaperclip } from "react-icons/bs";

const Home = () => {
  // Array of image sources for cycling
  const images = [image1, image2, image3, image4, image6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update the image index every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div name="home" className="relative h-screen w-full">
      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center items-center h-full">
          {/* Fixed Cycling Image Container */}
          <div className="relative w-60 h-60 mb-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Profile"
                className={`absolute inset-0 border-4 border-red rounded-full object-contain w-full h-full transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <h1 className="pt-2 pb-8 text-6xl sm:text-7xl font-bold text-white">
            Hi there, I'm{" "}
            <span
              id="Vamsi"
              className="bg-gradient-to-b from-transparent to-yellow-300"
            >
              Bhaskara Sai Vamsi Krishna Padala!
            </span>
            .
          </h1>
          <h2 className="text-xl max-w-md font-semibold text-purple1 whitespace-nowrap">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Crafting code with purpose and precision.")
                  .start();
              }}
            />
          </h2>
          {/* <div className="py-4 flex space-x-4">
            <a
              href="https://github.com/pbsvk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="hover:text-purple1" />
            </a>
            <a
              href="https://www.linkedin.com/in/pbsvk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="hover:text-purple1" />
            </a>
            <a href="mailto:bsvkpadala@gmail.com">
              <HiOutlineMail size={30} className="hover:text-purple1" />
            </a>
            <a
              href="https://www.dropbox.com/scl/fi/p95iul12mcmrg8d5xhzxa/Bhaskara_Resume.pdf?rlkey=t2c75rtelfyixqeh0s78uxj40&st=7oip8dhz&dl=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsPaperclip size={30} className="hover:text-purple1" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
