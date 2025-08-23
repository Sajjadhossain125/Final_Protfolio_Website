// src/components/sections/GenericPage.js
// A placeholder component for other pages like 'Education', 'Portfolio', etc.

import React from 'react';

const GenericPage = ({ title }) => (
  <div className="w-full min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
    <h1 className="text-6xl font-bold text-yellow-400 mb-4">{title}</h1>
    <p className="text-gray-400">Content for the {title} page goes here.</p>
  </div>
);

export default GenericPage;
