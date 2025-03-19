import React from "react";
import "../App.css";
import profilePicture from '../assets/heroImage.png'; // Import your image

// ABOUT ME SECTION //
const About = () => {
  return (
    <div name="about" className=" w-full min-h-screen flex">
      <div className="max-w-screen-lg p-14 flex items-center"> {/* Flex container for bio and image, items-center for vertical alignment */}

        {/* Bio Text Container */}
        <div className="mr-8"> {/* Add some right margin to separate text and image */}
          <h1 className="text-6xl font-bold">
            <span id="Vamsi">About Me</span>
          </h1>
          <p className="pt-4 text-xl leading-8">
            Hello! Bhaskara Sai here, a passionate Data Analyst proficient in Python, SQL, Tableau, and Power BI, specializing in predictive modeling, statistical analysis, and data visualization, with a proven track record of leveraging data-driven insights to optimize business strategies.
            <br></br>
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0"> {/* Prevent image from shrinking */}
        <img
            src={profilePicture}
            alt="Your Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-purple1"
          />

        </div>

      </div>
    </div>
  );
};

export default About;