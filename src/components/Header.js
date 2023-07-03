import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto py-4 px-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold"><Link to="/">포트폴리오</Link></h1>
                <nav>
                <ul className="flex space-x-4">
                    <li><a href="/portfolio" className="hover:text-gray-300">기술 스택</a></li>
                    <li><a href="/portfolio/projects" className="hover:text-gray-300">프로젝트</a></li>
                    <li><a href="/portfolio/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;