import React from "react";
import "../App.css";
import profilePicture from '../assets/heroImage.png';

// Icons
import { FaReact, FaAws, FaPython, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiNodedotjs } from "react-icons/si";

// ABOUT ME SECTION //
const About = () => {
  return (
    <div name="about" className="w-full min-h-screen flex flex-col">
      <div className="max-w-screen-lg p-14 flex flex-col md:flex-row items-start justify-between">

        {/* Bio Text Container */}
        <div className="mr-8">
          <h1 className="education-title text-6xl font-bold">
            <span id="Vamsi">About Me</span>
          </h1>
          <p className="course-item pt-4 text-xl leading-8">
            Hello! I'm a Software Engineer with expertise in full-stack development, cloud infrastructure, and a specialization in iOS Development. I’m passionate about building scalable software systems, creating seamless mobile experiences, and leveraging AI to solve real-world problems.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img
            src={profilePicture}
            alt="Your Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-purple1"
          />
        </div>
      </div>

<div className="w-full px-4 pb-10">
  {/* <h2 className="text-4xl font-bold mb-6 text-center">
    <span id="Vamsi">Tech Stack</span>
  </h2> */}

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-1 gap-y-6 gap-4 justify-items-center">
    {[
      "swift", "javascript", "typescript", "react", "html", "css",
      "tailwind", "nodejs", "deno", "express", "python", "flask",
      "cpp", "c", "aws", "appwrite", "supabase", "firebase",
      "azure", "postgresql", "sqlite", "tensorflow", "matlab", "scikitlearn",
      "pytorch", "opencv", "git"
    ].map((tech, idx) => (
      <a
        key={idx}
        href={`https://${tech === "c" ? "en.wikipedia.org/wiki/C_(programming_language)" :
          tech === "cpp" ? "isocpp.org" :
          tech === "sqlite" ? "sqlite.org" :
          tech === "scikitlearn" ? "scikit-learn.org/stable" :
          tech === "matlab" ? "mathworks.com/products/matlab.html" :
          tech === "opencv" ? "opencv.org" :
          tech === "appwrite" ? "appwrite.io" :
          tech === "tailwind" ? "tailwindcss.com" :
          tech === "html" || tech === "css" ? "developer.mozilla.org" :
          tech === "git" ? "git-scm.com" :
          `${tech}.org`}`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-110"
      >
        <img
          src={`https://skillicons.dev/icons?i=${tech}`}
          alt={tech}
          className="w-14 h-14"
        />
      </a>
    ))}

    {/* SwiftUI fallback image */}
    <a
      href="https://developer.apple.com/xcode/swiftui/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-200 hover:scale-110"
    >
      <img
        src="https://github.com/user-attachments/assets/a6e0e700-0c8f-483e-abb9-8d1aafea34bd"
        alt="SwiftUI"
        className="w-16 h-16"
      />
    </a>
  </div>
</div>
</div>
  );
};

export default About;
