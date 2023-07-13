import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    { id: 1, title: '학습용 웹 쇼핑몰 제작', description: '사용 스택 : html, css, js', link: 'https://github.com/dbckd999/shopingmall' },
    { id: 2, title: '소프트웨어 공학 실습 과제', description: '사용 스택 : html, css, js, spring boot', link: 'https://github.com/user941211/SEproject' },
    { id: 3, title: '졸업작품(미완)', description: '사용 스택 : js, css, react, node.js , (mysql, python)', link: 'https://github.com/user941211/gaemi' }
  ]);

  return (
      <section className="container mx-auto py-8 px-6">
          <div className="Title_me underline decoration-gray-500 underline-offset-8 decoration-1 mt-9">Projects</div>
          <p>id : user941211</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <li key={project.id} className="border border-gray-200 rounded-lg p-4">
                    <a href={project.link} className="hover:text-blue-500">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p>{project.description}</p>
                    </a>
                </li>
              ))}
          </ul>
      </section>
  );
};

export default Projects;