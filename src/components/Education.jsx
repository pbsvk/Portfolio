import React from "react";
import "../App.css";

const Skills = () => {
  const educationTimelineData = [
    {
      key: "001",
      dateText: "Sept 2023 – Dec 2024",
      title: "Stevens Institute of technology",
      subtitle: "M.S., Computer Science"
    },
    {
      key: "002",
      dateText: "Aug 2019 – May 2023",
      title: "MVGR College of Engineering",
      subtitle: "B.Tech, Electronics and Communication Engineering"
    }
  ];

  return (
    <div name="education" className="education-section w-full min-h-screen flex">
      <div className="education-container max-w-screen-lg p-14">
        <div>
          <h1 className="education-title">
            <span id="Vamsi">Education</span>
          </h1>
          <div className="flex justify-center items-center">
            <div className="timeline">
              {educationTimelineData.map((item) => (
                <div key={item.key} className="timeline-item">
                  <div className="timeline-date">
                    {item.dateText}
                  </div>
                  <div className="timeline-content">
                    <h3 className="institution-name">{item.title}</h3>
                    <h4 className="degree-name">{item.subtitle}</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;