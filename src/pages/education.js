import React from 'react';
import './education.css';

function Education() {
  return (
    <section className="education">
      <div className="education-container">
        <h2>My Education</h2>
        <ul>
          <li>
            <strong>M.Tech – [University Name]</strong>
            <p>Specialization: [Field], Year: [20XX–20XX]</p>
            <p>CGPA: 8.9</p>
          </li>
          <li>
            <strong>B.Tech – [College Name]</strong>
            <p>Specialization: [Field], Year: [20XX–20XX]</p>
            <p>CGPA: 8.5</p>
          </li>
          <li>
            <strong>PUC – [College/Board]</strong>
            <p>Percentage: 90%</p>
          </li>
          <li>
            <strong>SSLC – [School Name]</strong>
            <p>Percentage: 93%</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
