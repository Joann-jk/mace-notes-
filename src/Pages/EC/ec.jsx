import React, { useState } from 'react';
import Pagemodal from '../page_modal/pageModal';
import data from '../data/sems.json';
import './ec.css'; // Import the CSS file for styling

function CS() {
  // Initialize state to track selected semester
  const [selectedSemester, setSelectedSemester] = useState('semester 3');
  
  // Create a list of semesters
  const semesters = Object.keys(data.electronics); // ['semester 3', 'semester 4', ...]

  return (
    <div className="cs-container">
      {/* Main Title for Computer Science */}
      <h1 className="cs-title">Electronics and Communication</h1>
      
      {/* Dropdown to Select Semester */}
      <div className="semester-selection">
        <label htmlFor="semester">Choose Semester:</label>
        <select 
          id="semester" 
          value={selectedSemester} 
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester.replace('semester', 'Semester ')}
            </option>
          ))}
        </select>
      </div>
      
      {/* Render subjects based on selected semester */}
      <Pagemodal 
        sem={data['electronics'][selectedSemester]} 
        heading={`Subjects for ${selectedSemester.replace('semester', 'Semester ')}`} 
      />
    </div>
  );
}

export default CS;
