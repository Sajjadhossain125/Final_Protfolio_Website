// src/components/common/SkillBar.js
// A simple, reusable component to display a skill and its progress.

import React from 'react';

const SkillBar = ({ skill, level }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-gray-300">{skill}</span>
      <span className="text-sm text-yellow-400">{level}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: level }}></div>
    </div>
  </div>
);

export default SkillBar;
