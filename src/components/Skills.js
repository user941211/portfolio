import React from 'react';
import html_css_js from './html_css_js.png';
import react_logo from './react.png';
import mysql from './mysql.png';
import node_js from './Node_js.svg';
import github from '../image/github.png';
import bootstrap from '../image/bootstrap.png';
import tailwindcss from '../image/tailwindcss.png';
const Skills = () => {
  return(
    <article className="bg-amber-200">
        <div className="max-w-6xl w-full mx-auto py-8 px-16 ">
          <div className="Title_me underline decoration-gray-950 underline-offset-8 decoration-1 mt-9 font-bold text-5xl p-3">Skills</div>
          <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div className="row-span-2 rounded-lg border p-6 duration-300 hover:translate-y-4 bg-white">
                  <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-2xl text-red-500">Frontend</div>
                  <div>
                      <div><img src={html_css_js} className="object-contain w-60 h-60 mt-2 mx-auto" alt="html,css,바닐라js"></img></div>
                      <div><img src={react_logo} className="object-contain w-60 h-60 mt-2 mx-auto" alt="react"></img></div>
                      <div><img src={bootstrap} className="object-contain w-60 h-60 mt-2 mx-auto" alt="부트스트랩"></img></div>
                      <div><img src={tailwindcss} className="object-contain w-60 h-60 mt-2 mx-auto" alt="tailwind css"></img></div>
                  </div>
              </div>
              <div className="rounded-lg border p-6 duration-300 hover:translate-y-4 bg-white">
                  <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-2xl text-red-500">Version Control</div>
                  <div>
                      <div><img src={github} className="object-contain w-60 h-60 mt-2 mx-auto" alt="github"></img></div>
                  </div>
              </div>
              <div className="rounded-lg border p-6 duration-300 hover:translate-y-4 bg-white">
                  <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-2xl text-red-500 mx-auto">Backend</div>
                  <div>
                      <div><img src={mysql} className="object-contain w-60 h-60 mt-2 mx-auto" alt="속성-값 db mysql"></img></div>
                      <div><img src={node_js} className="object-contain w-60 h-60 mt-2 mx-auto" alt="node.js 기초"></img></div>
                  </div>
              </div>
              
          </div>
      </div>
    </article>
  );
};

export default Skills;