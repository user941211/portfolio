import React, { useEffect, useState } from 'react';

const Header = ({onButtonClick}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isTop, setIsTop] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (scrollPosition === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }, [scrollPosition]);
  
    const headerStyle = isTop ? { backgroundColor: 'transparent' , color: 'white', hover:{color:'gray'}, boxShadow: 'none'} : {};
    const buttonStyle = isTop ? { hover:{color:'gray'}} : {};

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full bg-white shadow-md text-black z-10" style={headerStyle}>
            <div className="box-border w-full max-w-[71.25rem] h-[4.5rem] p-[1.25rem 2rem] mx-auto">
                <nav className="flex items-center justify-between py-4 px-8">
                    <div className="hidden md:block w-full ">
                    {/* pc용 */}
                    <h1 className="text-2xl font-bold float-left cursor-pointer" onClick={() => onButtonClick(1)}>BJS's Portfolio</h1>
                    <dav className="float-right ml-4 flex items-center">
                        <dav><button style={buttonStyle} className="px-4 font-bold hover:text-red-500 leading-8" onClick={() => onButtonClick(2)}>About Me</button></dav>
                        <dav><button className="px-4 font-bold hover:text-red-500 leading-8" onClick={() => onButtonClick(3)}>Skills</button></dav>
                        <dav><button className="px-4 font-bold hover:text-red-500 leading-8" onClick={() => onButtonClick(4)}>Projects</button></dav>
                    </dav>
                    </div>
                    <div className="md:hidden">
                    {/* 모바일용 미완 */}
                        <h1 className="text-2xl font-bold float-left cursor-pointer" onClick={() => onButtonClick(1)}>BJS's Portfolio</h1>
                        <button className="float-right px-4 font-bold hover:text-red-500 leading-8" onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white">
                        <ul className="flex flex-col items-center space-y-4 text-black">
                        <li>
                            <button
                            className="px-4 font-bold hover:text-red-500 leading-8"
                            onClick={() => onButtonClick(2)}
                            >
                            About Me
                            </button>
                        </li>
                        <li>
                            <button
                            className="px-4 font-bold hover:text-red-500 leading-8"
                            onClick={() => onButtonClick(3)}
                            >
                            Skills
                            </button>
                        </li>
                        <li>
                            <button
                            className="px-4 font-bold hover:text-red-500 leading-8"
                            onClick={() => onButtonClick(4)}
                            >
                            Projects
                            </button>
                        </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;