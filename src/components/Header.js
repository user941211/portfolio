import React, { useEffect, useState } from 'react';

const Header = ({onButtonClick}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isTop, setIsTop] = useState(true);
  
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
                    <h1 className="text-2xl font-bold">BJS's Portfolio</h1>
                        <button>Menu</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;