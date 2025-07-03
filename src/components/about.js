import React, { useState, useRef, useEffect } from 'react';
import './about.css';

function About() {
  const [showEdu, setShowEdu] = useState(false);
  const eduRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (eduRef.current && !eduRef.current.contains(e.target)) {
        setShowEdu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="asection-title">About Me</h2>
        <p className="about-text">
          I'm <strong>Sahana</strong>, a frontend developer passionate about crafting stunning, responsive web interfaces using modern tools like React, Tailwind, and JavaScript. I enjoy solving problems, designing elegant UI, and constantly learning new things.
        </p>

        <div className="edu-section">
          <h3>🎓 Graduation</h3>
          <p><strong>B.Tech in ARTIFICIAL INTELLIGENCE & DATA SCIENCE</strong> at Channabasaveshara Institute Of Technology, Gubbi</p>
          <p>CGPA: 8.56</p>
        </div>

        <div className="about-buttons">
        <button className="btn" onClick={() => setShowEdu(!showEdu)}>
            {showEdu ? "Hide Full Education" : "View Full Education"}
        </button>

        {/* Resume Button */}
        <a href="/Sahana G resume (BE).pdf" download className="btn resume-btn">
            Download Resume
        </a>
        </div>


        {showEdu && (
          <div className="dropdown-education" ref={eduRef}>
            <ul>
              <li><strong>B.E – Channabasaveshara Institute Of Technology, Gubbi </strong><br />Year: 2021–2025<br />CGPA: 8.56</li>
              <li><strong>PUC – Vidyavahini P U College, Tumkur</strong><br />Year: 2019–2021<br />Score: 98%</li>
              <li><strong>SSLC – Gireesha Girls High School, Hiriyur</strong><br />Year: 2016–2019<br />Score: 93.76%</li>
            </ul>
          </div>
        )}

        <div className="skills-section">
            <hr></hr>
            <h1>  </h1>
          <h3>My Skills</h3>
          <div className="skills-container">
            {[
              { skill: "Python", level: 95 },
              { skill: "Artificial Intelligence", level: 70 },
              { skill: "Data Science", level: 80 },
              { skill: "Machine Learning", level: 85 },
              { skill: "Deep Learning", level: 80 },
              { skill: "HTML", level: 95 },
              { skill: "CSS", level: 90 },
              { skill: "JavaScript", level: 85 },
              { skill: "ReactJS", level: 50 },
              { skill: "Django", level: 85 },
              { skill: "Flask", level: 90 },
              { skill: "Git & GitHub", level: 75 },
            ].map((s, idx) => (
              <div className="skill" key={idx}>
                <div className="skill-header">
                  <span>{s.skill}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
