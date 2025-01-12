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
import postgresql from '../image/postgresql.png';
import yolov8 from '../image/yolov8.jpg';
import gitlab from '../image/gitlab.png';
import oracle from '../image/oracle.jpg';
import deepstream from '../image/deepstream.jpg';
import ubuntu from '../image/ubuntu.png';
import windows from '../image/windows.png';

const Skills = () => {
    return (
        <article className="bg-amber-200">
            <div className="max-w-8xl w-full mx-auto py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="Title_me underline decoration-gray-950 underline-offset-8 decoration-1 mt-4 sm:mt-9 font-bold text-3xl sm:text-4xl md:text-5xl p-3">
                    Skills
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Frontend */}
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500">Frontend</div>
                        <div>
                            <div><img src={html_css_js} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="HTML, CSS, JavaScript" /></div>
                            <div><img src={react_logo} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="React" /></div>
                            <div><img src={bootstrap} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Bootstrap" /></div>
                            <div><img src={nextjs} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Next.js" /></div>
                            <div><img src={tailwindcss} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Tailwind CSS" /></div>
                        </div>
                    </div>
                    
                    {/* Version Control */}
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500">Version Control</div>
                        <div>
                            <div><img src={github} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="GitHub" /></div>
                            <div><img src={gitlab} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="GitLab" /></div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500 mx-auto">Backend</div>
                        <div>
                            <div><img src={mysql} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="MySQL" /></div>
                            <div><img src={node_js} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Node.js" /></div>
                            <div><img src={MongoDB} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="MongoDB" /></div>
                            <div><img src={postgresql} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="PostgreSQL" /></div>
                            <div><img src={oracle} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Oracle" /></div>
                        </div>
                    </div>

                    {/* Deep-Learning */}
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500 mx-auto">Deep-Learning</div>
                        <div>
                            <div><img src={yolov8} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="YOLOv8" /></div>
                            <div><img src={deepstream} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="DeepStream" /></div>
                        </div>
                    </div>

                    {/* Server */}
                    <div className="rounded-lg border p-4 sm:p-6 duration-300 hover:translate-y-4 bg-white">
                        <div className="pb-0.5 mb-1.5 border-b border-gray-300 max-w-lg font-bold text-xl sm:text-2xl text-red-500 mx-auto">Server</div>
                        <div>
                            <div><img src={ubuntu} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Ubuntu" /></div>
                            <div><img src={windows} className="object-contain w-48 sm:w-60 h-48 sm:h-60 mt-2 mx-auto" alt="Windows" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Skills;
