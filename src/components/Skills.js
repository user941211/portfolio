import React from 'react';
import html_css_js from './html_css_js.png';
import react_logo from './react.png';
import mysql from './mysql.png';
import node_js from './Node_js.svg';
import github from '../image/github.png';
import bootstrap from '../image/bootstrap.png';
import tailwindcss from '../image/tailwindcss.png';
import nextjs from '../image/Nextjs.png';
import MongoDB from '../image/MongoDB.png';

const Skills = () => {
    return (
        <article className="bg-amber-200">
            <div className="max-w-6xl w-full mx-auto py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="Title_me underline decoration-gray-950 underline-offset-8 decoration-1 mt-4 sm:mt-9 font-bold text-3xl sm:text-4xl md:text-5xl p-3">
                    Skills
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500">Frontend</div>
                        <div>
                            <div><img src={html_css_js} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="HTML, CSS, 바닐라 JS" /></div>
                            <div><img src={react_logo} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="React" /></div>
                            <div><img src={bootstrap} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="부트스트랩" /></div>
                            <div><img src={tailwindcss} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Tailwind CSS" /></div>
                        </div>
                    </div>
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500">Version Control</div>
                        <div>
                            <div><img src={github} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="GitHub" /></div>
                        </div>
                    </div>
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500 mx-auto">Backend</div>
                        <div>
                            <div><img src={mysql} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="속성-값 DB MySQL" /></div>
                            <div><img src={node_js} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Node.js 기초" /></div>
                            <div><img src={nextjs} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="nextjs" /></div>
                            <div><img src={MongoDB} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="nextjs" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Skills;