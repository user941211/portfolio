import React, { useState, handleSubmit } from 'react';
//import handleSubmit from 'React';
const Skills = () => {
  
  return (
    <div className="flex justify-center  h-screen">
      <div className="w-full p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">
              Name:
            </label>
            
            <p>JaeSeong Byeon , 변재성</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email:
            </label>
            
            <p>common941211@gmail.com</p>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Skills;