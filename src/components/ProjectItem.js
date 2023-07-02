import React from 'react';

const ProjectItem = ({ title, description }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;