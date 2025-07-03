import React from "react";
import hcr from "../assets/portfolio/HCR.jpg";
import dreamai from "../assets/portfolio/dreamai.png";
import weatherbunny from "../assets/weatherbunny.png";
import messengerapp from "../assets/portfolio/Screenshot 2025-02-11 at 8.53.31 PM.png";
import AWS from "../assets/Screenshot 2025-02-11 at 8.59.47 PM.png";
import SnapX from "../assets/portfolio/SnapX-home.png"
// import mancala from '../assets/portfolio/mancala.png';
// import valet from '../assets/portfolio/valet.png';
// import exercisetrack from '../assets/portfolio/exercisetrack.png';
import "../App.css";

// PROJECTS SECTION //
const Portfolio = () => {
  // Array for displaying projects
  const portfolios = [
    {
      id: 1,
      src: SnapX,
      href: "https://github.com/pbsvk/SnapX",
    },
    {
      id: 2,
      src: hcr,
      href: "https://www.dropbox.com/scl/fi/ale93i95hsqetqido60rt/d969f207-c9f0-434e-96a0-4919cfec70c6-EDIT-copy.jpg?rlkey=2qm4agonj810iogs39p8zsii4&st=up7gfl0y&dl=0",
    },
    {
      id: 3,
      src: dreamai,
      href: "https://github.com/pbsvk/dreamAi-Text-to-Image-Generator",
    },
    {
      id: 4,
      src: weatherbunny,
      href: "https://github.com/pbsvk/Weather-Bunny",
    },
    {
      id: 5,
      src: messengerapp,
      href: "https://github.com/pbsvk/MessengerApp",
    },
    {
      id: 6,
      src: AWS,
      href: "https://github.com/pbsvk/AWS-Microservices-Migration-and-CI-CD-Pipeline-Implementation-for-Monolithic-Application",
    },
    
  ];

  return (
    <div name="Projects" className="w-full min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className=" education-title text-6xl inline font-bold">
            <span id="Vamsi">Projects</span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="rounded-lg border-2 border-solid border-gray-300 bg-white"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-t hover:opacity-30 transition duration-300 ease-in-out"
                />
              </a>
              {id === 1 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">
                    SnapX - Connect with Snaps
                  </p>
                  <p className="text-sm text-gray-500">
                    #TypeScript #Appwrite #React.js #Tailwind CSS #ShadCN #React Query #React Hook Form
                  </p>
                </div>
              )}
              {id === 2 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">
                    Mythra: Home Companion Robot
                  </p>
                  <p className="text-sm text-gray-500">
                    #python #AI #OpenAI #ML
                  </p>
                </div>
              )}
              {id === 3 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">Dream AI</p>
                  <p className="text-sm text-gray-500">
                    #HTML #CSS #javascript
                  </p>
                </div>
              )}
              {id === 4 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">Weather Bunny</p>
                  <p className="text-sm text-gray-500">
                    #swift #iOS #swiftUI #RestAPI #CoreLocation
                  </p>
                </div>
              )}
              {id === 5 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">Messenger App</p>
                  <p className="text-sm text-gray-500">
                    #swift #swiftUI #Firebase
                  </p>
                </div>
              )}
              {id === 6 && (
                <div className="text-center mt-2">
                  <p className="text-black font-bold">
                    AWS Microservices Migration and CI/CD Pipeline
                    Implementation
                  </p>
                  <p className="text-sm text-gray-500">
                    #AWS #Docker #Jenkins #Kubernetes #EC2
                  </p>
                </div>
              )}  
            </div>
          ))}
        </div>
      </div>
      {/* This <style jsx> block is used in Next.js projects.
          If you're using Create React App or another setup, move these styles to your CSS file. */}
      <style jsx>{`
        @media (max-width: 850px) {
          .max-w-screen-lg {
            margin-top: 9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
