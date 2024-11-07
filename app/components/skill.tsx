'use client'; // Menandakan komponen ini sebagai Client Component

import React from 'react';

const skills = [
  'JavaScript',
  'React',
  'CSS',
  'HTML',
  'Node.js',
  'Python',
  'SQL',
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>

      {/* Styling langsung di dalam komponen menggunakan jsx style */}
      <style jsx>{`
        .skills-container {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }

        .skills-container h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .skills-list {
          list-style-type: none;
          padding: 0;
        }

        .skill-item {
          font-size: 1.2rem;
          margin: 10px 0;
          padding: 8px;
          background-color: #f0f0f0;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .skill-item:hover {
          background-color: #e0e0e0;
        }

        .skill-item:nth-child(odd) {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};

export default Skills;
