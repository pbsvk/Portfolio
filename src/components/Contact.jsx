import React from 'react'
import "../App.css";

const Contact = () => {
    return (
      <div
        name="contact"
        className="w-full min-h-screen p-4 text-bold"
      >
        <div className="flex flex-col p-4 justify-center text-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <h1 className="education-title text-6xl font-bold inline">
              <span id="Vamsi">Connect with me</span>
            </h1>
          </div>
  
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/ajjmeloa"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 bg-transparent border-2 border-purple1 text-red-500 focus:outline-none rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="my-4 p-2 bg-transparent border-2 border-purple1 text-red-500 focus:outline-none rounded-lg"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="10"
                className="p-2 bg-transparent border-2 border-purple1 text-red-500 focus:outline-none rounded-lg"
                required
              ></textarea>
  
  <button className="text-white bg-red-500 px-6 py-3 my-8 mx-auto flex items-center rounded-full hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300">
  SUBMIT
</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;