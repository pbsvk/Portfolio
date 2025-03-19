import React from "react";
import "../App.css";

const Skills = () => {
  const experienceTimelineData = [
    {
      key: "001",
      dateText: "May 2024 - Dec 2024",
      title: "AutoTechMation Inc",
      subtitle: "Data Analyst Intern",
      details: [
        "Location: Atlanta, GA, USA",
        "Achieved 95% Accuracy in Partner Segmentation by analyzing 50k+ structured/unstructured datasets using Python (Pandas, NumPy), enabling targeted strategies for high-value resellers.",
        "Reduced Client Onboarding Risks by 30% through predictive models (logistic regression, k-means clustering) forecasting partner risk profiles.",
        "Automated 20+ Hours/Month of Manual Work by extracting partner capabilities from unstructured text using NLP (spaCy, GPT-3.5) for AI-driven ”Partner 360” profiles.",
        "Improved Dataset Accuracy by 25% by streamlining monthly data refreshes with Python automation, enabling real-time market insights.",
        "Boosted Client Revenue by 12% via dynamic Excel/Google Sheets reports tracking certifications and sales trends for 10+ enterprise clients.",
        "Accelerated Executive Decision-Making by translating complex data into actionable insights, cutting partner onboarding time by 20%."
      ]
    },
    {
      key: "002",
      dateText: "Sep 2024 - Dec 2024",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Advanced Algorithms",
      details: [
        "Location: Hoboken, New Jersey, United States",
        "Mentored 100+ graduate students in data-intensive algorithm implementation and debugging, reinforcing coding standards, data optimization practices, and performance tuning.",
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
    },
    {
      key: "004",
      dateText: "Jun 2020 - Aug 2023",
      title: "Sri Sai Viveka Technologies",
      subtitle: "Business Intelligence Analyst",
      details: [
        "Location: Hyderabad, Telangana, India",
        "Achieved 18% YoY Sales Growth toward 20 crore rupees target by analyzing 15+ machinery/consumable product lines using Power BI, optimizing pricing strategies for underperforming regions (Andhra/Telangana).",
        "Reduced Inventory Costs by 2.3M rupees/year by building Tableau dashboards to forecast demand for 10+ SKUs (e.g., Steel Strapping, Shrink Films), minimizing overstocking.",
        "Improved Customer Retention by 25% through Python/SQL-driven segmentation of 500+ B2B clients, enabling targeted campaigns for high-margin products (PET Strapping Tools)",
        "Increased Machinery Uptime by 30% by designing vendor performance scorecards to evaluate delivery timelines and equipment quality for critical machinery (Strapping Machines, Conveyors).",
        "Expanded Market Reach into Bangladesh/Sri Lanka, driving 12% sales growth for Carton Sealers/CordStraps through regional demand analysis."
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
