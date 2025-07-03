import React from "react";
import "../App.css";

const Skills = () => {
  const experienceTimelineData = [
    {
      key: "001",
      dateText: "May 2024 - Present",
      title: "AutoTechMation Inc",
      subtitle: "SWE",
      details: [
  "Designed and developed a full-stack web platform using React, Node.js, TypeScript, and PostgreSQL, enabling three-tier user role management (Super Admin, Client Admin, Client User) with tailored access and workflows—resulting in 100% secure and scalable user segregation.", 
  "Built and deployed a dynamic dashboard system on AWS, featuring interactive charts and real-time analytics (country-wise, vendor-wise) that enhanced client data insights and reduced decision-making time by 20%.",
  "Engineered a report generation engine using Python and Node.js to dynamically filter partner data across vendors, regions, and specializations, exporting to Excel—cutting client reporting efforts by 60%.",
  "Integrated email verification and admin approval pipelines for user onboarding using AWS SES and backend logic in Node.js—achieving a 100% validated onboarding flow and reducing spam registrations.",
  "Developed internal user management tools with fine-grained permission controls (e.g., view/download/generate reports) using React and PostgreSQL, streamlining team management for enterprise clients.",
  "Automated supplier data scraping and ingestion from public partner directories using Python and scraping libraries (BeautifulSoup, Requests), saving 20+ hours/month of manual data entry and ensuring fresh data monthly.",
  "Optimized data refresh pipelines and zip code formatting logic, increasing report accuracy by 25% and eliminating inconsistencies across dashboards, exports, and country aggregations.",
  "Collaborated in agile sprints with cross-functional teams to address 30+ UI/UX bugs, implement feature enhancements (e.g., re-download history, vendor filter clarity, tutorial UI), and align designs with client feedback.",
  "Contributed to system architecture planning to support future enhancements like notifications, user groups, and data retention policies—laying groundwork for a scalable enterprise-grade SaaS tool."
]
    },
    {
      key: "002",
      dateText: "Sep 2024 - Dec 2024",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Advanced Algorithms",
      details: [
        "Location: Hoboken, New Jersey, United States",
        "Mentored 100+ graduate students in data-intensive algorithm implementation and debugging, reinforcing coding standards and performance tuning.",
        "Prepare course materials, lead office hours, and assist with grading",
        "Make challenging concepts more accessible and engaging for everyone"
      ]
    },
    {
      key: "003",
      dateText: "Sep 2024 - Dec 2024",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Algorithms",
      details: [
        "Authored detailed documentation and solutions, enabling clearer understanding of analytical concepts, algorithmic strategies, and performance optimization methods applicable to real-world data analytics.",
        "Analyzed and optimized algorithmic performance for assignments involving complex data structures, resulting in improved runtime eﬀiciency (40%+ speed gains) using Python.",
        "Make challenging concepts more accessible and engaging for everyone"
      ]
    }
  ];
  return (
    <section 
      name="experience" 
      id="experience" 
      className="education-section"
    >
      <div className="education-container">
        <h1 className="education-title">
          <span id="Vamsi">Experience</span>
        </h1>
        <div className="timeline">
          {experienceTimelineData.map((item) => (
            <div key={item.key} className="timeline-item">
              <div className="timeline-date">{item.dateText}</div>
              <div className="timeline-content">
                <h3 className="institution-name">{item.title}</h3>
                <h4 className="degree-name">{item.subtitle}</h4>
                <div className="course-list">
                  {item.details.map((detail, index) => (
                    <div key={index} className="course-item">{detail}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
